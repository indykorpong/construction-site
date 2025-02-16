'use client'
import Image from 'next/image'

import { Carousel } from '../components/carousel'
import { useEffect } from 'react'
import Swiper from 'swiper'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const swiper = new Swiper('.swiper', {
      loop: true,
      modules: [Pagination, Navigation, Autoplay],
      slidesPerView: 1,
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
        <Image
          src={`/home_preview/home_preview_0${item}.jpg`}
          alt={`home_preview_0${item}`}
          width={500}
          height={500}
          className="m-auto"
        />
      </div>
    )
  })

  const site_preview = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
    <div key={index} className="swiper-slide color-white">
      <Image
        src={`/site_preview/site_preview_0${item}.jpg`}
        alt={`site_preview_0${item}`}
        width={500}
        height={500}
        className="m-auto"
      />
    </div>
  ))

  return (
    <>
      <div className="bg-gray-400">
        <Carousel>{home_preview}</Carousel>
      </div>
      <div className="bg-gray-600">
        <Carousel>{site_preview}</Carousel>
      </div>
      <div>Home</div>
    </>
  )
}
