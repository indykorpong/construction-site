'use client'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import DataGrid from '@/app/_components/data-grid'
import { getProjects } from '@/lib/api/project'
import { useQuery } from '@tanstack/react-query'

export default function ProjectsPage() {
  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects(),
  })
  const projectsData = projects?.map((project) => ({
    id: project.id,
    name: project.name,
    imageUrl: project.images?.[0]?.url,
    link: `/projects/${project.id}`,
  }))
  return (
    <ContentBox>
      <Title>Projects</Title>
      <DataGrid data={projectsData} isLoading={isLoadingProjects} />
    </ContentBox>
  )
}
