import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { getFourProjects } from '@/lib/project'
import DataGrid from '@/app/_components/data-grid'
import { CompanyInfo } from '@/app/_components/company-info'
import { HomeCarousel } from './carousel'

export default function Home() {
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

const HomeProjects = async () => {
  const projects = await getFourProjects()
  const projectsData = projects.map((project) => ({
    id: project.id,
    name: project.name,
    imageUrl: project.images[0]?.url || '',
    link: `/projects/${project.id}`,
  }))

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
      <Title>Projects</Title>
      <DataGrid data={projectsData} />
      <Box display={'flex'} justifyContent={'end'} marginTop={'30px'}>
        <Link href="/projects">
          <Typography variant={'body1'} color={'text.secondary'} fontWeight={600} sx={{ textDecoration: 'underline' }}>
            See more
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}
