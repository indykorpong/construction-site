'use client'
import { CompanyInfo } from '@/app/_components/company-info'
import { ContentBox } from '@/app/_components/content-box'
import { Box, Link, Typography, Skeleton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getProjects } from '@/lib/api/project'
import { Title } from '@/app/_components/title'
import DataGrid from '@/app/_components/data-grid'
import { HomeCarousel } from './carousel'

export default function YdpiHome() {
  return (
    <>
      <Box bgcolor={'background.default'}>
        <HomeCarousel />
      </Box>
      <ContentBox sx={{ paddingY: { mobile: 5, tablet: 10, desktop: 10 } }}>
        <CompanyInfo />
      </ContentBox>
      <ContentBox bgcolor="background.default">
        <HomeProjects />
      </ContentBox>
    </>
  )
}

const HomeProjects = () => {
  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ['projects', 4],
    queryFn: () => getProjects({ limit: 4 }),
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
    imageUrl: project.images[0]?.url || '',
    link: `/aasp/projects/${project.id}`,
  }))

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
      <Title>Projects</Title>
      <DataGrid data={projectsData} isLoading={isLoadingProjects} />
      <Box display={'flex'} justifyContent={'end'} marginTop={'30px'}>
        <Link href="/aasp/projects">
          <Typography variant={'body1'} color={'text.secondary'} fontWeight={600} sx={{ textDecoration: 'underline' }}>
            See more
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}
