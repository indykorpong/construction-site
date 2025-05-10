import { ContentBox } from '@/app/_components/content-box'
import { Title } from '@/app/_components/title'
import { Box, Grid2 } from '@mui/material'
import { getProject } from '@/lib/project'
import { CarouselComponent } from '@/app/_components/carousel'
import { TextWithLineBreak } from '@/app/_components/text-with-line-break'
import DataGrid from '@/app/_components/data-grid'

export default async function ProjectId({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const project = await getProject(parseInt(id, 10))
  if (!project) {
    return <ContentBox>Project not found</ContentBox>
  }

  const images = project.images.map((image) => image.url)
  const imageCarousel = images.map((image, index) => (
    <Box
      key={index}
      component={'img'}
      src={image}
      alt={project.name}
      width={'34rem'}
      sx={{ objectFit: 'cover', aspectRatio: '1/1' }}
    />
  ))

  const projectProducts =
    project?.projectProducts.map((projectProduct) => ({
      id: projectProduct.product.id,
      name: projectProduct.product.name,
      imageUrl: projectProduct.product.images[0].url,
      link: `/products/${projectProduct.product.id}`,
    })) ?? []

  return (
    <ContentBox>
      <Grid2 container spacing={8} columns={24} maxWidth={'80rem'} justifyContent={'space-between'} marginY={'2rem'}>
        <Grid2 size={12} sx={{ maxWidth: '34rem' }}>
          <CarouselComponent loop={true} className={'swiper-light'}>
            {imageCarousel}
          </CarouselComponent>
        </Grid2>
        <Grid2 size={12}>
          <Title>{project.name}</Title>
          <TextWithLineBreak text={project.description} />
        </Grid2>
      </Grid2>
      <Title>Products in this project</Title>
      <DataGrid data={projectProducts} />
    </ContentBox>
  )
}
