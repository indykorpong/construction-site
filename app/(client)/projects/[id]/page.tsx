import { ContentBox } from '@/app/_components/content-box'
import { Title } from '@/app/_components/title'
import { Box, Grid } from '@mui/material'
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
      width={'640px'}
      height={'640px'}
      sx={{ objectFit: 'cover' }}
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
      <Grid container spacing={8} columns={24} maxWidth={'80rem'} justifyContent={'space-between'} marginY={'2rem'}>
        <Grid size={12}>
          <CarouselComponent loop={true} className={'swiper-dark'}>
            {imageCarousel}
          </CarouselComponent>
        </Grid>
        <Grid size={12}>
          <Title>{project.name}</Title>
          <TextWithLineBreak text={project.description} />
        </Grid>
      </Grid>
      <Title>Products in this project</Title>
      <DataGrid data={projectProducts} />
      {/* <Box
        display={'flex'}
        width={'100%'}
        flexWrap={'wrap'}
        justifyContent={'start'}
        alignItems={'center'}
        marginBottom={'2rem'}
      >
        {projectProducts &&
          projectProducts.map((product, index) => (
            <Box
              key={index}
              display={'flex'}
              maxWidth={'25%'}
              marginRight={'1rem'}
              alignItems={'center'}
              justifyContent={'start'}
            >
              <CardComponent title={product.title} imageUrl={product.imageUrl} />
            </Box>
          ))}
      </Box> */}
    </ContentBox>
  )
}
