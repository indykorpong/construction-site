'use client'
import Link from 'next/link'
import { Box, Skeleton, Typography } from '@mui/material'
import { ContentBox } from '@/app/_components/content-box'
import { Title } from '@/app/_components/title'
import { getProjects } from '@/lib/api/project'
import DataGrid from '@/app/_components/data-grid'
import { CompanyInfo } from '@/app/_components/company-info'
import { HomeCarousel } from './carousel'
import { useQuery } from '@tanstack/react-query'

export default function EpandsHome() {
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
    link: `/epands/projects/${project.id}`,
  }))

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
      <Title>Projects</Title>
      <DataGrid data={projectsData} isLoading={isLoadingProjects} />
      <Box display={'flex'} justifyContent={'end'} marginTop={'30px'}>
        <Link href="/epands/projects">
          <Typography variant={'body1'} color={'text.secondary'} fontWeight={600} sx={{ textDecoration: 'underline' }}>
            See more
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}
