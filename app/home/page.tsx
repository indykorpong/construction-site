'use client'

import { Carousel } from '../components/carousel'
import { useEffect } from 'react'
import Swiper from 'swiper'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'

import { Card } from '../components/card'

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const swiper = new Swiper('.swiper', {
      loop: true,
      modules: [Pagination, Navigation, Autoplay],
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
      speed: 800,
    })
  }, [])

  const home_preview = [1, 2, 3, 4, 5, 6].map((item, index) => {
    return (
      <div key={index} className="swiper-slide color-white">
        <img src={`/home_preview/home_preview_${item}.jpg`} alt={`home_preview_${item}`} className="m-auto" />
      </div>
    )
  })

  return (
    <div className="bg-background">
      <div className="mx-auto flex h-[600px] items-center">
        <Carousel>{home_preview}</Carousel>
      </div>
      <CompanyInfo />
      <Projects />
    </div>
  )
}

function CompanyInfo() {
  return (
    <div className="flex w-full items-center justify-center bg-white px-10 py-10">
      <div className="mr-2 flex w-2/5 items-center justify-center">
        <Image src={'/Head_Office.jpg'} alt={'Head office'} width={600} height={600} />
      </div>

      <div className="w-2/5 overflow-hidden indent-10 text-lg">
        <div>
          <p>
            บริษัท ดับเบิลเอ เอสพี จำกัด ได้ก่อตั้งขึ้นในปี พ.ศ. 2560
            โดยทีมบริหารที่มีความเชี่ยวชาญในด้านการก่อสร้างมากว่า 25ปี
            ด้วยความมุ่งมั่นที่จะให้บริการและจัดจำหน่ายแบบหล่อคอนกรีตประเภทต่างๆ
            รวมถึงไปนั่งร้านและอุปกรณ์ต่างๆที่ช่วยในการก่อสร้างอย่างมืออาชีพ
            เพื่อช่วยให้งานของคุณเร็วขึ้นกว่าการใช้อุปกรณ์ก่อสร้างทั่วไป และมีคุณภาพในทุกขั้นตอนของโครงการ
            ด้วยราคาที่สมเหตุสมผล
          </p>

          <br />

          <p>
            นอกจากนี้ เรายังบริการให้คำแนะนำออกแบบพื้นที่ใช้งานจริง เพื่อประเมินราคา สอนติดตั้งและการใช้งานที่หน้างาน
            มีรายการคำนวณ ที่รับรองโดยสามัญวิศวกร
          </p>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="grid w-full bg-gray-200 p-5">
      {[
        { title: 'project 1', description: 'description 1' },
        { title: 'project 1', description: 'description 1' },
      ].map((item, index) => {
        return (
          <div key={index} className="">
            <Card key={index} title={item.title} description={item.description} />
          </div>
        )
      })}
    </div>
  )
}
