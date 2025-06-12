'use client'
import { getProjects } from '../../../lib/api/project'
import { ProjectTable } from './projects'
import useSWR from 'swr'

export default function ProjectsPage() {
  const { data: projects, isLoading: isLoadingProjects } = useSWR('/api/projects', () => getProjects())

  return <ProjectTable projects={projects || []} isLoading={isLoadingProjects} />
}
