import { ContentBox } from '@/app/_components/content-box'
import { Title } from '@/app/_components/title'
import { Box } from '@mui/material'
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
      maxWidth={{ desktop: '34rem', tablet: '34rem', mobile: '100%' }}
      sx={{ objectFit: 'cover', aspectRatio: '1/1', margin: 'auto' }}
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
    <Box
      display={'flex'}
      gap={{ desktop: '2rem', tablet: '1rem', mobile: '0rem' }}
      maxWidth={'80rem'}
      margin={'auto'}
      flexDirection={{ desktop: 'row', tablet: 'column', mobile: 'column' }}
      padding={'3rem'}
    >
      <Box
        paddingBottom={{ desktop: '3rem', tablet: '0rem', mobile: '0rem' }}
        margin={'auto'}
        maxWidth={{ desktop: '40rem', tablet: '40rem', mobile: '100%' }}
      >
        <CarouselComponent loop={true} className={'swiper-dark'}>
          {imageCarousel}
        </CarouselComponent>
      </Box>
      <Box paddingY={{ desktop: '3rem', tablet: '2rem', mobile: '2rem' }}>
        <Title>{project.name}</Title>
        <TextWithLineBreak text={project.description} />
      </Box>
      <Title>Products in this project</Title>
      <DataGrid data={projectProducts} />
    </Box>
  )
}
