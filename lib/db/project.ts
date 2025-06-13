'use server'
import { Image, Product, Project } from '@prisma/client'
import { minioClient } from '../minio'
import prisma from '../prisma'
import { randomUUID } from 'crypto'

export type ProjectData = Project & {
  images: Image[]
  projectProducts: {
    product: Product & {
      images: Image[]
    }
  }[]
}

export async function getProjects({ limit }: { limit?: number } = {}): Promise<ProjectData[]> {
  const projects = await prisma.project.findMany({
    include: {
      images: true,
      projectProducts: {
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
    orderBy: {
      id: 'asc',
    },
    take: limit,
  })

  const projectsData = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      images: await Promise.all(
        project.images.map(async (image) => {
          image.url = await minioClient.getFileUrl(image.url)
          return image
        }),
      ),
      projectProducts: await Promise.all(
        project.projectProducts.map(async (projectProduct) => ({
          ...projectProduct,
          product: {
            ...projectProduct.product,
            images: await Promise.all(
              projectProduct.product.images.map(async (image) => {
                image.url = await minioClient.getFileUrl(image.url)
                return image
              }),
            ),
          },
        })),
      ),
    })),
  )

  return projectsData
}

export async function getProject(id: number): Promise<ProjectData> {
  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      images: true,
      projectProducts: {
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  })

  if (!project) {
    throw new Error('Project not found')
  }

  const projectData = {
    ...project,
    images: await Promise.all(
      project.images.map(async (image) => {
        image.url = await minioClient.getFileUrl(image.url)
        return image
      }),
    ),
    projectProducts: await Promise.all(
      project.projectProducts.map(async (projectProduct) => ({
        ...projectProduct,
        product: {
          ...projectProduct.product,
          images: await Promise.all(
            projectProduct.product.images.map(async (image) => {
              image.url = await minioClient.getFileUrl(image.url)
              return image
            }),
          ),
        },
      })),
    ),
  }

  return projectData
}

export async function getFourProjects() {
  const projects = await prisma.project.findMany({
    take: 4,
    orderBy: { id: 'asc' },
    include: {
      images: true,
    },
  })

  const projectsData = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      images: await Promise.all(
        project.images.map(async (image) => {
          image.url = await minioClient.getFileUrl(image.url)
          return image
        }),
      ),
    })),
  )

  return projectsData
}

export async function createProject(data: Project) {
  try {
    const res = await prisma.project.create({
      data: {
        name: data.name,
        description: data.description,
      },
    })

    return res
  } catch (err) {
    console.error('Error creating project:', err)
    throw err
  }
}

export async function updateProject(id: number, data: Project) {
  try {
    const res = await prisma.project.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
      },
    })

    return res
  } catch (err) {
    console.error('Error updating project:', err)
    throw err
  }
}

export async function uploadProjectImage(id: number, projectName: string, files: File[]) {
  try {
    await Promise.all(
      files.map(async (file) => {
        try {
          if (!file) {
            throw new Error('file not found')
          }

          const fileName = randomUUID()
          const fileObject = `projects/${projectName.replaceAll(' ', '')}/${fileName}.${file.name.split('.').pop()}`

          await minioClient.uploadFile('construction', fileObject, file)
          await prisma.project.update({
            where: { id },
            data: {
              images: {
                create: {
                  url: fileObject,
                },
              },
            },
          })
        } catch (err) {
          console.error(file.name, err)
          throw err
        }
      }),
    )
  } catch (err) {
    console.error('Error uploading: ', err)
    throw err
  }
}

export async function deleteProjectImage(id: number) {
  try {
    const image = await prisma.image.findUnique({
      where: { id },
    })

    if (!image) {
      throw new Error('Image not found')
    }

    await minioClient.deleteFile(image.url)
    await prisma.image.delete({
      where: { id },
    })
  } catch (err) {
    console.error('Error deleting image:', err)
    throw err
  }
}
