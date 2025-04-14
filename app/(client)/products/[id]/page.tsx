import { CarouselComponent } from '@/app/_components/carousel'
import { ContentBox } from '@/app/_components/content-box'
import { Title } from '@/app/_components/title'
import { getProduct } from '@/lib/product'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default async function ProductId({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const product = await getProduct(parseInt(id, 10))
  if (!product) {
    return <ContentBox>Product not found</ContentBox>
  }

  const images = product.images.map((image) => image.url)
  const imageCarousel = images.map((image, index) => (
    <Box key={index}>
      <Image src={image} alt={product.name} width={640} height={640} style={{ objectFit: 'cover' }} />
    </Box>
  ))

  return (
    <Box display={'flex'} gap={'2rem'} maxWidth={'80rem'} margin={'auto'}>
      <ContentBox sx={{ maxWidth: '40rem' }}>
        <CarouselComponent loop={true} className={'swiper-black'}>
          {imageCarousel}
        </CarouselComponent>
      </ContentBox>
      <ContentBox sx={{ maxWidth: '40rem' }}>
        <Title>{product.name}</Title>
        <Typography>{product.description}</Typography>
      </ContentBox>
    </Box>
  )
}
