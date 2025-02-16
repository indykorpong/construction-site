'use client'
import React, { FC, ReactNode } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import './styles.css'

type CarouselProps = {
  children: ReactNode
}

export const Carousel: FC<CarouselProps> = ({ children }) => {
  return (
    <>
      <div className="swiper">
        <div className="swiper-wrapper">{children}</div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </>
  )
}
