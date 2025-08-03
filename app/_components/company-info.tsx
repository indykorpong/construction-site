import { Box, Typography } from '@mui/material'
import { Title } from './title'
import { Sites } from '../common/enums/sites'
import { ReactNode, useMemo } from 'react'

const aaspInfo = () => {
  return (
    <>
      <Title>บริษัท ดับเบิลเอ เอสพี จำกัด</Title>
      <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
        บริษัท ดับเบิลเอ เอสพี จำกัด ได้ก่อตั้งขึ้นในปี พ.ศ. 2560 โดยทีมบริหารที่มีความเชี่ยวชาญในด้านการก่อสร้างมากว่า
        25ปี ด้วยความมุ่งมั่นที่จะให้บริการและจัดจำหน่ายแบบหล่อคอนกรีตประเภทต่างๆ
        รวมไปถึงนั่งร้านและอุปกรณ์ต่างๆที่ช่วยในการก่อสร้าง
        เพื่อให้งานก่อสร้างของลูกค้าเร็วและมีคุณภาพที่ดีกว่าการใช้อุปกรณ์ก่อสร้างทั่วไป ในราคาที่สมเหตุสมผล
      </Typography>
      <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
        นอกจากนี้ เรายังบริการให้คำแนะนำออกแบบพื้นที่ใช้งานจริง เพื่อประเมินราคา สอนติดตั้งและการใช้งานที่หน้างาน
        พร้อมรายการคำนวณ
      </Typography>
    </>
  )
}

const ydpiInfo = () => {
  return (
    <>
      <Title>บริษัท วายดีพีไอ เรนทัล จำกัด</Title>
      <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
        บริษัท วายดีพีไอ เรนทัล จำกัด ได้ก่อตั้งขึ้นในปี พ.ศ. 2563 โดยทีมบริหารที่มีความเชี่ยวชาญในด้านการก่อสร้างมากว่า
        25 ปี ที่ต้องการจะต่อยอดบริการให้เช่าในส่วนของแบบหล่อคอนกรีตประเภทต่างๆ
        รวมไปถึงนั่งร้านและอุปกรณ์ก่อสร้างบางส่วน ที่แต่เดิมจัดจำหน่ายเพียงอย่างเดียว
        เพื่อที่จะตอบสนองต่อความต้องการของลูกค้าแต่ล่ะรายได้ดียิ่งขึ้น ด้วยราคาที่สมเหตุสมผล
      </Typography>
      <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
        นอกจากนี้ เรายังบริการให้คำแนะนำออกแบบพื้นที่ใช้งานจริง เพื่อประเมินราคา สอนติดตั้งและการใช้งานที่หน้างาน
        พร้อมรายการคำนวณ
      </Typography>
    </>
  )
}

const epandsInfo = () => {
  return (
    <>
      <Title>บริษัท อีพีแอนด์ เอส จำกัด</Title>
      <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
        บริษัท อีพีแอนด์ เอส จำกัด ได้ก่อตั้งขึ้นในปี พ.ศ. 2535
        โดยทีมผู้บริหารที่มีประสบการณ์ในด้านเทาเวอร์เครนและลิฟท์โดยสารสำหรับงานก่อสร้างอาคาร
        ด้วยความมุ่งมั่นตั้งใจที่จะนำเสนอสินค้าที่มีคุณภาพและบริการที่รวดเร็วไว้วางใจได้ ทำให้บริษัทฯ
        ได้เติบโตอย่างรวดเร็วเป็นที่รู้จักเป็นอย่างดีในกลุ่มบริษัทผู้รับเหมาก่อสร้างของประเทศไทย
      </Typography>
      <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
        สำหรับเครื่องจักรให้เช่า บริษัทฯ มีทั้งเทาเวอร์เครน และ ลิฟท์โดยสาร สำหรับงานก่อสร้าง
        ให้เช่าทั้งระยะสั้นและระยะยาว มีขนาดแตกต่างกันให้เลือกเพื่อให้เหมาะสมกับหน่วยงานก่อสร้างแต่ละประเภท
      </Typography>
      <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
        ตลอดระยะเวลาหลายปีที่ดำเนินธุรกิจมา
        บริษัทฯได้มุ่งเน้นคุณภาพด้านบริการเป็นหัวใจจึงได้มีทีมงานฝ่ายบริการเพื่อให้บริการ ติดตั้ง รื้อถอน เพิ่มความสูง
        รวมถึงซ่อมแซม ตรวจเช็คบำรุงรักษาอย่างถูกวิธี
        พร้อมบริการอะไหล่อย่างครบถ้วนเพื่อลดความเสียหายในงานก่อสร้างเพื่อสร้างความมั่นใจให้แก่ลูกค้าที่ใช้บริการจากทางบริษัทฯ
      </Typography>
    </>
  )
}

export const CompanyInfo = ({ site }: { site: Sites }) => {
  const info: ReactNode = useMemo(() => {
    switch (site) {
      case Sites.AASP:
        return aaspInfo()
      case Sites.YDPI:
        return ydpiInfo()
      case Sites.EPANDS:
        return epandsInfo()
    }
  }, [site])
  return (
    <Box
      width={'100%'}
      maxWidth={1280}
      marginX={'auto'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={{ mobile: 'center', tablet: 'center', desktop: 'flex-start' }}
      flexDirection={{ mobile: 'column', tablet: 'column', desktop: 'row' }}
      bgcolor={'white'}
      height={'auto'}
      gap={{ mobile: 5, tablet: 10, desktop: 6 }}
    >
      <Box
        component={'img'}
        src={'/Head_Office.jpg'}
        alt={'Head office'}
        display={'flex'}
        width={'auto'}
        height={'auto'}
        maxWidth={{ mobile: '100%', tablet: '100%', desktop: '50%' }}
      />

      <Box
        display={'flex'}
        flexDirection={'column'}
        width={{ mobile: '100%', tablet: '100%', desktop: '50%' }}
        height={'100%'}
        overflow={'hidden'}
      >
        {info}
      </Box>
    </Box>
  )
}
