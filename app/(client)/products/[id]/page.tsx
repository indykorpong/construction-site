import { CarouselComponent } from '@/app/_components/carousel'
import { ContentBox } from '@/app/_components/content-box'
import { TextWithLineBreak } from '@/app/_components/text-with-line-break'
import { Title } from '@/app/_components/title'
import { getProduct } from '@/lib/product'
import { Box, Typography } from '@mui/material'

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
      sx={{ objectFit: 'cover', aspectRatio: '1/1' }}
    />
  ))

  return (
    <Box display={'flex'} gap={'2rem'} maxWidth={'80rem'} margin={'auto'}>
      <ContentBox sx={{ maxWidth: '40rem', maxHeight: '40rem' }}>
        <CarouselComponent loop={true} className={'swiper-dark'}>
          {imageCarousel}
        </CarouselComponent>
      </ContentBox>
      <ContentBox sx={{ maxWidth: '40rem' }}>
        <Title>{product.name}</Title>
        <Typography variant={'h6'} color={'text.secondary'}>
          Product Details
        </Typography>
        <TextWithLineBreak text={product.description} />
      </ContentBox>
    </Box>
  )
}
