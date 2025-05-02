import Link from 'next/link'
import { CarouselComponent } from '../../_components/carousel'
import { Box, Typography } from '@mui/material'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { getFourProjects } from '@/lib/project'
import DataGrid from '@/app/_components/data-grid'
import { CompanyInfo } from '@/app/_components/company-info'

export default function Home() {
  const homePreview = [1, 2, 3, 4, 5, 6].map((item, index) => {
    return (
      <Box key={index} justifyContent="center" alignItems="center">
        <Box
          component={'img'}
          src={`/home_preview/home_preview_${item}.jpg`}
          alt={`home_preview_${item}`}
          sx={{
            display: 'block',
            height: '100%',
            width: '100%',
            maxWidth: '1280px',
            overflow: 'hidden',
            objectFit: 'cover',
            margin: 'auto',
          }}
        />
      </Box>
    )
  })

  return (
    <>
      <Box bgcolor={'background.default'}>
        <Box maxWidth={'1280px'} height={'600px'} margin={'auto'}>
          <CarouselComponent loop={true}>{homePreview}</CarouselComponent>
        </Box>
      </Box>

      <ContentBox>
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
      <Box display={'flex'} justifyContent={'end'} marginRight={'30px'} marginTop={'30px'}>
        <Link href="/projects">
          <Typography variant={'body1'} color={'text.secondary'} fontWeight={600} sx={{ textDecoration: 'underline' }}>
            See more
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}
