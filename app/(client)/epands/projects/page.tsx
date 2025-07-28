'use client'
import { ContentBox } from '@/app/_components/content-box'
import { Title } from '@/app/_components/title'
import DataGrid from '@/app/_components/data-grid'
import { getProjects } from '@/lib/api/project'
import { Skeleton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

export default function ProjectsPage() {
  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects(),
  })

  if (isLoadingProjects) {
    return (
      <ContentBox>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </ContentBox>
    )
  }

  const projectsData = projects?.map((project) => ({
    id: project.id,
    name: project.name,
    imageUrl: project.images?.[0]?.url,
    link: `/epands/projects/${project.id}`,
  }))
  return (
    <ContentBox>
      <Title>Projects</Title>
      <DataGrid data={projectsData} isLoading={isLoadingProjects} />
    </ContentBox>
  )
}
