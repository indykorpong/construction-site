'use client'
import { getProjects } from '@/lib/api/project'
import { ProjectTable } from './projects'
import useSWR from 'swr'
import { ProjectData } from '../../../lib/db/project'

export default function ProjectsPage() {
  const {
    data: projects,
    isLoading: isLoadingProjects,
    mutate: updateProject,
  } = useSWR('/api/projects', () => getProjects())

  const onUpdateProject = (p: ProjectData) => {
    if (!projects) return

    const newProjects = [...projects]

    for (let i = 0; i < projects.length; i++) {
      if (newProjects[i].id === p.id) {
        newProjects[i] = p
        break
      }
    }

    updateProject(newProjects, { revalidate: false })
  }

  return <ProjectTable projects={projects || []} isLoading={isLoadingProjects} onUpdateProject={onUpdateProject} />
}
