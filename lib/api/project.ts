import { ProjectData } from '@/lib/db/project'

export const getProjects = async ({ limit }: { limit?: number } = {}): Promise<ProjectData[]> => {
  const url = limit ? `/api/projects?limit=${limit}` : '/api/projects'
  const res = await fetch(url)

  if (!res.ok) {
    console.error('Failed to fetch projects')
    throw new Error('Failed to fetch projects')
  }

  return await res.json()
}

export const getProject = async ({ id }: { id: number }): Promise<ProjectData> => {
  const res = await fetch(`/api/projects/${id}`)

  if (!res.ok) {
    console.error('Failed to fetch project')
    throw new Error('Failed to fetch project')
  }

  return await res.json()
}

export const createProject = async (data: ProjectData): Promise<ProjectData> => {
  const res = await fetch(`/api/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    console.error('Failed to create project')
    throw new Error('Failed to create project')
  }
  return await res.json()
}

export const updateProject = async (id: number, data: ProjectData): Promise<ProjectData> => {
  const res = await fetch(`/api/projects`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, data }),
  })

  if (!res.ok) {
    console.error('Failed to update project')
    throw new Error('Failed to update project')
  }

  return await res.json()
}
