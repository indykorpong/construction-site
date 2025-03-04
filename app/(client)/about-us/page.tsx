import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <Box>
      <AboutUsCompanyInfo />

      <AboutUsOurGoal />

      <AboutUsAward />
    </Box>
  )
}

const AboutUsCompanyInfo = () => {
  return (
    <Box padding={4}>
      <h1 className="header">About Us</h1>

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
            รวมถึงไปนั่งร้านและอุปกรณ์ต่างๆที่ช่วยในการก่อสร้างอย่างมืออาชีพ
            เพื่อช่วยให้งานของคุณเร็วขึ้นกว่าการใช้อุปกรณ์ก่อสร้างทั่วไป และมีคุณภาพในทุกขั้นตอนของโครงการ
            ด้วยราคาที่สมเหตุสมผล
          </Typography>

          <br />

          <Typography component="p" fontFamily="Noto Sans Thai" fontSize={18} sx={{ textIndent: 40 }}>
            นอกจากนี้ เรายังบริการให้คำแนะนำออกแบบพื้นที่ใช้งานจริง เพื่อประเมินราคา สอนติดตั้งและการใช้งานที่หน้างาน
            มีรายการคำนวณ ที่รับรองโดยสามัญวิศวกร
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const AboutUsOurGoal = () => {
  return (
    <Box bgcolor={'#ccc'} padding={4}>
      <h1 className="header">เป้าหมายของเรา</h1>

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
    </Box>
  )
}

const AboutUsAward = () => {
  return (
    <Box bgcolor={'aliceblue'} padding={4}>
      <h1 className="header">สิทธิบัตร-รางวัล</h1>

      <Box display={'flex'} justifyContent={'space-around'}>
        {[1, 2, 3].map((item, index) => {
          return (
            <Box key={index} margin={4}>
              <Image src={'/file.svg'} alt={`${item}`} height={100} width={100} />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
