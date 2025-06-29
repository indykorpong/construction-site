'use client'

import { CarouselComponent } from '@/app/_components/carousel'
import { Box } from '@mui/material'

export const HomeCarousel = () => {
  const homePreview = [1, 2, 3, 4, 5, 6].map((item, index) => {
    return (
      <Box key={index} justifyContent="center" alignItems="center">
        <Box
          component={'img'}
          src={`/home_preview/home_preview_${item}.jpg`}
          alt={`home_preview_${item}`}
          height={{ mobile: 300, tablet: 500, desktop: 600 }}
          sx={{
            display: 'block',
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
    <Box maxWidth={'1280px'} height={{ mobile: 300, tablet: 500, desktop: 600 }} margin={'auto'}>
      <CarouselComponent loop={true}>{homePreview}</CarouselComponent>
    </Box>
  )
}
