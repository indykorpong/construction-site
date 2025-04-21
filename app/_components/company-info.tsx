import { Box, Typography } from '@mui/material'
import { Title } from './title'

export const CompanyInfo = () => {
  return (
    <Box
      width={'100%'}
      maxWidth={1280}
      marginX={'auto'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      bgcolor={'white'}
      height={600}
      paddingY={10}
    >
      <Box
        component={'img'}
        src={'/Head_Office.jpg'}
        alt={'Head office'}
        display={'flex'}
        width={'auto'}
        height={'100%'}
        marginRight={6}
      />

      <Box display={'flex'} flexDirection={'column'} width={'50%'} height={'100%'} overflow={'hidden'}>
        <Title>บริษัท ดับเบิลเอ เอสพี จำกัด</Title>
        <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
          บริษัท ดับเบิลเอ เอสพี จำกัด ได้ก่อตั้งขึ้นในปี พ.ศ. 2560
          โดยทีมบริหารที่มีความเชี่ยวชาญในด้านการก่อสร้างมากว่า 25ปี
          ด้วยความมุ่งมั่นที่จะให้บริการและจัดจำหน่ายแบบหล่อคอนกรีตประเภทต่างๆ
          รวมไปถึงนั่งร้านและอุปกรณ์ต่างๆที่ช่วยในการก่อสร้าง
          เพื่อให้งานก่อสร้างของลูกค้าเร็วและมีคุณภาพที่ดีกว่าการใช้อุปกรณ์ก่อสร้างทั่วไป ในราคาที่สมเหตุสมผล
        </Typography>
        <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
          นอกจากนี้ เรายังบริการให้คำแนะนำออกแบบพื้นที่ใช้งานจริง เพื่อประเมินราคา สอนติดตั้งและการใช้งานที่หน้างาน
          พร้อมรายการคำนวณ
        </Typography>
      </Box>
    </Box>
  )
}
