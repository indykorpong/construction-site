'use client'

import { useEffect, useState } from 'react'
import Swiper from 'swiper'
import * as sw from 'swiper/modules'
import Image from 'next/image'

import { CarouselComponent } from '../../components/carousel'
import { CardComponent } from '../../components/card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ProjectProps } from '../../types/components'

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
      <HomeCompanyInfo />
      <HomeProjects />
    </div>
  )
}

const HomeCompanyInfo = () => {
  return (
    <div className="flex w-full items-center justify-center bg-white px-10 py-10">
      <div className="mr-10 flex w-2/5 items-center justify-center">
        <Image className="rounded-lg" src={'/Head_Office.jpg'} alt={'Head office'} width={600} height={600} />
      </div>

      <div className="h-full w-2/5 indent-10 text-lg">
        <h1 style={{ marginBottom: '50px' }}>บริษัท ดับเบิลเอ เอสพี จำกัด</h1>

        <p style={{ textIndent: '2em', marginBottom: '1em' }}>
          ก่อตั้งขึ้นในปี พ.ศ. 2560 โดยทีมบริหารที่มีความเชี่ยวชาญในด้านการก่อสร้างมากว่า 25ปี
          ด้วยความมุ่งมั่นที่จะให้บริการและจัดจำหน่ายแบบหล่อคอนกรีตประเภทต่างๆ
          รวมไปถึงนั่งร้านและอุปกรณ์ต่างๆที่ช่วยในการก่อสร้าง
          เพื่อให้งานก่อสร้างของลูกค้าเร็วและมีคุณภาพที่ดีกว่าการใช้อุปกรณ์ก่อสร้างทั่วไป ในราคาที่สมเหตุสมผล
        </p>
        <p style={{ textIndent: '2em' }}>
          นอกจากนี้ เรายังบริการให้คำแนะนำออกแบบพื้นที่ใช้งานจริง เพื่อประเมินราคา สอนติดตั้งและการใช้งานที่หน้างาน
          พร้อมรายการคำนวณ
        </p>
      </div>
    </div>
  )
}

const HomeProjects = () => {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listProjects, setListProjects] = useState<ProjectProps[]>([
    { id: 1, name: 'Project One', description: 'Description for project one' },
    { id: 2, name: 'Project Two', description: 'Description for project two' },
    { id: 3, name: 'Project Three', description: 'Description for project three' },
    { id: 4, name: 'Project four', description: 'Description for project four' },
  ])

  // TODO: fetch projects from API (only first 4 projects)

  return (
    <div className="flex flex-col justify-between bg-gray-200 p-5">
      <div className="header">Our Projects</div>
      <div className="flex flex-wrap items-center justify-start">
        {listProjects.map((project, index) => {
          return (
            <div key={index} className="my-3 flex w-1/2 justify-center px-3">
              <div className="flex w-1/2 flex-col items-center justify-center">
                <div
                  style={{ width: 'fit-content' }}
                  onClick={() => {
                    router.push('/projects/' + project.id)
                  }}
                >
                  <CardComponent title={project.name} description={project.description} imageUrl={project.imageUrl} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <Link href="/projects" style={{ display: 'flex', justifyContent: 'end', color: 'blue', marginRight: '30px' }}>
        See more...
      </Link>
    </div>
  )
}
