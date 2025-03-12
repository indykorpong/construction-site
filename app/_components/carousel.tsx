'use client'
import React, { FC, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import './styles.css'
import { Box } from '@mui/material'

type CarouselProps = {
  children: ReactNode[]
}

export const CarouselComponent = ({ children }: CarouselProps) => {
  return (
    <Box maxWidth="1280px" margin="auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="swiper"
        speed={800}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
