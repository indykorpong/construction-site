import { Product, Project } from '@prisma/client'

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

export const getProjects = async ({ limit }: { limit?: number } = {}): Promise<ProjectData[]> => {
  const url = limit ? `/api/projects?limit=${limit}` : '/api/projects'
  const res = await fetch(url)

  if (!res.ok) {
    console.error('Failed to fetch projects')
    throw new Error('Failed to fetch projects')
  }

  return await res.json()
}

export const getProject = async (id: string): Promise<ProjectData> => {
  const res = await fetch(`/api/projects/${id}`)

  if (!res.ok) {
    console.error('Failed to fetch project')
    throw new Error('Failed to fetch project')
  }

  return await res.json()
}
