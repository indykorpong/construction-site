'use client'

import { Carousel } from '../components/carousel'
import { useEffect } from 'react'
import Swiper from 'swiper'
import { Pagination, Navigation, Autoplay, Grid } from 'swiper/modules'

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const swiper = new Swiper('.swiper', {
      loop: true,
      modules: [Pagination, Navigation, Autoplay],
      slidesPerView: 2,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }, [])

  const home_preview = [1, 2, 3, 4, 5, 6].map((item, index) => {
    return (
      <div key={index} className="swiper-slide color-white">
        <img src={`/home_preview/home_preview_0${item}.jpg`} alt={`home_preview_0${item}`} className="m-auto" />
      </div>
    )
  })

  return (
    <>
      <div className="bg-white">
        <Carousel>{home_preview}</Carousel>
      </div>
      <div>Home</div>
    </>
  )
}
