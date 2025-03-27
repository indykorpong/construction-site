'use client'
import { useState } from 'react'

import { CarouselComponent } from '../../_components/carousel'
import { CardComponent } from '../../_components/card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ProjectProps } from '../../types/components'
import { Box, Typography } from '@mui/material'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'

export default function Home() {
  const homePreview = [1, 2, 3, 4, 5, 6].map((item, index) => {
    return (
      <Box key={index} justifyContent="center" alignItems="center">
        <Box
          component="img"
          src={`/home_preview/home_preview_${item}.jpg`}
          alt={`home_preview_${item}`}
          sx={{
            display: 'block',
            height: '100%',
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
    <>
      <Box bgcolor="aliceblue">
        <CarouselComponent loop={true}>{homePreview}</CarouselComponent>
      </Box>

      <ContentBox>
        <HomeCompanyInfo />
      </ContentBox>

      <ContentBox bgcolor="aliceblue">
        <HomeProjects />
      </ContentBox>
    </>
  )
}

const HomeCompanyInfo = () => {
  return (
    <Box
      width="100%"
      maxWidth={1280}
      marginX="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="white"
      height={600}
      paddingY={10}
    >
      <Box
        component="img"
        src={'/Head_Office.jpg'}
        alt={'Head office'}
        display="flex"
        width="auto"
        height="100%"
        marginRight={6}
      />

      <Box display="flex" flexDirection="column" width="50%" height="100%" overflow="hidden">
        <Typography component="h2" fontFamily="Noto Sans Thai" fontSize={30} fontWeight={600} marginBottom={2}>
          บริษัท ดับเบิลเอ เอสพี จำกัด
        </Typography>
        <Typography component="p" fontFamily="Noto Sans Thai" fontSize={18} sx={{ textIndent: 40 }}>
          บริษัท ดับเบิลเอ เอสพี จำกัด ได้ก่อตั้งขึ้นในปี พ.ศ. 2560
          โดยทีมบริหารที่มีความเชี่ยวชาญในด้านการก่อสร้างมากว่า 25ปี
          ด้วยความมุ่งมั่นที่จะให้บริการและจัดจำหน่ายแบบหล่อคอนกรีตประเภทต่างๆ
          รวมไปถึงนั่งร้านและอุปกรณ์ต่างๆที่ช่วยในการก่อสร้าง
          เพื่อให้งานก่อสร้างของลูกค้าเร็วและมีคุณภาพที่ดีกว่าการใช้อุปกรณ์ก่อสร้างทั่วไป ในราคาที่สมเหตุสมผล
        </Typography>

        <br />

        <Typography component="p" fontFamily="Noto Sans Thai" fontSize={18} sx={{ textIndent: 40 }}>
          นอกจากนี้ เรายังบริการให้คำแนะนำออกแบบพื้นที่ใช้งานจริง เพื่อประเมินราคา สอนติดตั้งและการใช้งานที่หน้างาน
          พร้อมรายการคำนวณ
        </Typography>
      </Box>
    </Box>
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
    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
      <Title>Our Projects</Title>
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'start'} alignItems={'center'} marginBlock={'2rem'}>
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
      </Box>

      <Link href="/projects" style={{ display: 'flex', justifyContent: 'end', color: 'blue', marginRight: '30px' }}>
        See more...
      </Link>
    </Box>
  )
}
