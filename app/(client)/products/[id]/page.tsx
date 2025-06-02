import { CarouselComponent } from '@/app/_components/carousel'
import { ContentBox } from '@/app/_components/content-box'
import { TextWithLineBreak } from '@/app/_components/text-with-line-break'
import { Title } from '@/app/_components/title'
import { getProduct } from '@/lib/product'
import { Box, Grid } from '@mui/material'

export default async function ProductId({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const product = await getProduct(parseInt(id, 10))
  if (!product) {
    return <ContentBox>Product not found</ContentBox>
  }

  const images = product.images.map((image) => image.url)
  const imageCarousel = images.map((image, index) => (
    <Box
      key={index}
      component={'img'}
      src={image}
      alt={product.name}
      width={'34rem'}
      maxWidth={{ desktop: '34rem', tablet: '34rem', mobile: '100%' }}
      sx={{ objectFit: 'cover', aspectRatio: '1/1', margin: 'auto' }}
    />
  ))

  return (
    <ContentBox>
      <Grid container spacing={8} columns={24} maxWidth={'80rem'} justifyContent={'space-between'} marginY={'2rem'}>
        <Grid size={{ desktop: 12, tablet: 24, mobile: 24 }} sx={{ maxWidth: '34rem' }}>
          <CarouselComponent loop={true} className={'swiper-dark'}>
            {imageCarousel}
          </CarouselComponent>
        </Grid>
        <Grid size={{ desktop: 12, tablet: 24, mobile: 24 }}>
          <Title>{product.name}</Title>
          <TextWithLineBreak text={product.description} />
        </Grid>
      </Grid>
    </ContentBox>
  )
}
