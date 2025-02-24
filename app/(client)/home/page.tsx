'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import Swiper from 'swiper'
import * as sw from 'swiper/modules'
import Image from 'next/image'
import { Pagination } from '@mui/material'

import { CarouselComponent } from '../../components/carousel'
import { CardComponent } from '../../components/card'

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const swiper = new Swiper('.swiper', {
      loop: true,
      modules: [sw.Pagination, sw.Navigation, sw.Autoplay],
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
        <CarouselComponent>{home_preview}</CarouselComponent>
      </div>
      <CompanyInfo />
      <Projects />
    </div>
  )
}

const CompanyInfo = () => {
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

const Projects = () => {
  type ProjectProps = {
    title: string
    description: string
    imageUrl?: string
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listProjects, setListProjects] = useState<ProjectProps[]>([
    { title: 'project 1', description: 'description of project 1', imageUrl: '' },
    { title: 'project 2', description: 'description of project 2', imageUrl: '' },
    { title: 'project 3', description: 'description of project 3', imageUrl: '' },
    { title: 'project 4', description: 'description of project 4', imageUrl: '' },
    { title: 'project 5', description: 'description of project 5', imageUrl: '' },
  ])
  const [page, setPage] = useState(1)

  const itemsPerPage = 4
  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const paginatedProjects = listProjects.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  // TODO: fetch projects from API

  return (
    <div className="flex h-[500px] w-full flex-col justify-between bg-gray-200 p-5">
      <div className="mb-4 text-4xl text-blue-800">Our Project</div>
      <div className="flex w-full flex-wrap items-center justify-start">
        {paginatedProjects.map((item, index) => {
          return (
            <div key={index} className="flex h-1/2 w-1/2 items-center justify-center p-3">
              <CardComponent title={item.title} description={item.description} imageUrl={item.imageUrl} />
            </div>
          )
        })}
      </div>

      <Pagination
        count={Math.ceil(listProjects.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
        autoFocus={false}
      />
    </div>
  )
}
