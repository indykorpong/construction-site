'use client'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import DataGrid from '@/app/_components/data-grid'
import useSWR from 'swr'
import { getProjects } from '@/lib/api/project'

export default function ProjectsPage() {
  const { data: projects, isLoading: isLoadingProjects } = useSWR('/api/projects', () => getProjects())
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
