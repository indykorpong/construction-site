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
      maxWidth={{ desktop: '34rem', tablet: '34rem', mobile: '100%' }}
      sx={{ objectFit: 'cover', aspectRatio: '1/1', margin: 'auto' }}
    />
  ))

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
        <Title>{product.name}</Title>
        <Typography variant={'h6'} color={'text.secondary'} marginY={'1rem'}>
          Product Details
        </Typography>
        <TextWithLineBreak text={product.description} />
      </Box>
    </Box>
  )
}
