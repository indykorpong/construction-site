'use client'
import { CarouselComponent } from '@/app/_components/carousel'
import { ContentBox } from '@/app/_components/content-box'
import { TextWithLineBreak } from '@/app/_components/text-with-line-break'
import { Title } from '@/app/_components/title'
import { getProduct } from '@/lib/api/product'
import { Box, Grid, Skeleton } from '@mui/material'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

export default function ProductId() {
  const { id } = useParams<{ id: string }>()

  const { data: product, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(parseInt(id, 10)),
  })

  if (isLoadingProduct) {
    return (
      <ContentBox>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </ContentBox>
    )
  }

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
