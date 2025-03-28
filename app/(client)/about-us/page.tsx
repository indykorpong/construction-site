'use client'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'

export default function AboutUs() {
  return (
    <>
      <ContentBox>
        <AboutUsCompanyInfo />
      </ContentBox>

      <ContentBox bgcolor="#ccc">
        <AboutUsOurGoal />
      </ContentBox>

      <ContentBox bgcolor="aliceblue">
        <AboutUsAward />
      </ContentBox>
    </>
  )
}

const AboutUsCompanyInfo = () => {
  return (
    <>
      <Title>About Us</Title>

      <Box display="flex" alignItems="center" justifyContent="flex-start">
        <Box
          component="img"
          src={'/Head_Office.jpg'}
          alt={'Head office'}
          display="flex"
          maxWidth="50%"
          marginRight={6}
        />

        <Box display="flex" flexDirection="column" overflow="hidden" justifyContent={'center'} maxWidth={'50%'}>
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
    </>
  )
}

const AboutUsOurGoal = () => {
  return (
    <>
      <Title>เป้าหมายของเรา</Title>

      <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
        <Box maxWidth={'45%'} bgcolor={'white'} borderRadius={4} padding={4} height={'100%'}>
          <Typography variant="h5" marginBottom={2} textAlign={'center'}>
            Vision
          </Typography>

          <Typography variant="body1" style={{ textIndent: '2em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </Typography>
        </Box>

        <Box maxWidth={'45%'} bgcolor={'white'} borderRadius={4} padding={4} height={'100%'}>
          <Typography variant="h5" marginBottom={2} textAlign={'center'}>
            Mission
          </Typography>

          <Typography variant="body1" style={{ textIndent: '2em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </Typography>
        </Box>
      </Box>
    </>
  )
}

const AboutUsAward = () => {
  return (
    <>
      <Title>สิทธิบัตร-รางวัล</Title>

      <Box display={'flex'} justifyContent={'space-around'}>
        {[1, 2, 3].map((item, index) => {
          return (
            <Box key={index} margin={4}>
              <Image src={'/file.svg'} alt={`${item}`} height={100} width={100} />
            </Box>
          )
        })}
      </Box>
    </>
  )
}
