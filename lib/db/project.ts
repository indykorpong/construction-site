'use server'
import { Product, Project } from '@prisma/client'
import { minioClient } from '../minio'
import prisma from '../prisma'
import { randomUUID } from 'crypto'
import { ImageData } from './product'
import { getImageUrl } from '@/utils/image'

export type ProjectData = Project & {
  images: ImageData[]
  projectProducts: {
    product: Product & {
      images: ImageData[]
    }
  }[]
}

export async function getProjects(
  {
    limit,
    siteId,
  }: {
    limit?: number
    siteId?: number
  } = {
    limit: undefined,
    siteId: 1,
  },
): Promise<ProjectData[]> {
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
    where: {
      siteId,
    },
    orderBy: {
      id: 'asc',
    },
    take: limit,
  })

  const projectsData = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      images: await Promise.all(project.images.map(getImageUrl)),
      projectProducts: await Promise.all(
        project.projectProducts.map(async (projectProduct) => ({
          ...projectProduct,
          product: {
            ...projectProduct.product,
            images: await Promise.all(projectProduct.product.images.map(getImageUrl)),
          },
        })),
      ),
    })),
  )

  return projectsData
}

export async function getProject(id: number, siteId: number): Promise<ProjectData> {
  const project = await prisma.project.findUnique({
    where: { id, siteId },
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
    images: await Promise.all(project.images.map(getImageUrl)),
    projectProducts: await Promise.all(
      project.projectProducts.map(async (projectProduct) => ({
        ...projectProduct,
        product: {
          ...projectProduct.product,
          images: await Promise.all(projectProduct.product.images.map(getImageUrl)),
        },
      })),
    ),
  }

  return projectData
}

export async function getFourProjects(siteId: number) {
  const projects = await prisma.project.findMany({
    where: {
      siteId,
    },
    take: 4,
    orderBy: { id: 'asc' },
    include: {
      images: true,
    },
  })

  const projectsData = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      images: await Promise.all(project.images.map(getImageUrl)),
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
        siteId: data.siteId,
      },
    })

    return res
  } catch (err) {
    console.error('Error creating project:', err)
    throw err
  }
}

export async function updateProject(id: number, data: ProjectData) {
  try {
    await prisma.projectProduct.deleteMany({
      where: {
        projectId: id,
      },
    })

    const res = await prisma.project.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        siteId: data.siteId,
        projectProducts: {
          create: data.projectProducts.map((projectProduct) => ({
            productId: projectProduct.product.id,
          })),
        },
      },
    })

    return res
  } catch (err) {
    console.error('Error updating project:', err)
    throw err
  }
}

export async function deleteProject(id: number) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: { images: true },
    })

    if (!project) {
      throw new Error('Project not found')
    }

    await Promise.all(project.images.map((image) => minioClient.deleteFile(image.filePath)))
    await prisma.image.deleteMany({
      where: { projectId: id },
    })
    await prisma.project.delete({
      where: { id },
    })

    console.log('Project deleted successfully')
  } catch (err) {
    console.error('Error deleting project:', err)
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
                  filePath: fileObject,
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

    await minioClient.deleteFile(image.filePath)
    await prisma.image.delete({
      where: { id },
    })
  } catch (err) {
    console.error('Error deleting image:', err)
    throw err
  }
}
