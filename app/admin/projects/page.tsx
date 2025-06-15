'use client'
import { getProjects } from '@/lib/api/project'
import { ProjectTable } from './projects'
import { ProjectData } from '@/lib/db/project'
import { useQuery } from '@tanstack/react-query'

export default function ProjectsPage() {
  const {
    data: projects,
    isLoading: isLoadingProjects,
    refetch: refetchProjects,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects(),
  })

  return <ProjectTable projects={projects || []} isLoading={isLoadingProjects} refetchProjects={refetchProjects} />
}
