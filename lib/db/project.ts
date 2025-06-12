'use server'
import { Product, Project } from '@prisma/client'
import { minioClient } from '../minio'
import prisma from '../prisma'

export type ProjectData = Project & {
  images: {
    url: string
  }[]
  projectProducts: {
    product: Product & {
      images: {
        url: string
      }[]
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

export async function updateProject(id: number, data: Project) {
  try {
    const res = await prisma.project.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
      },
    })

    return { ok: true, data: res }
  } catch (err) {
    console.error('Error updating project:', err)
    return { ok: false, error: 'Failed to update project ' + err }
  }
}
