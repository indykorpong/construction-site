import { Box, Typography } from '@mui/material'
import { ContentBox } from '@/app/_components/content-box'
import { Title } from '@/app/_components/title'
import { CompanyInfo } from '@/app/_components/company-info'
import { Sites } from '@/app/common/enums/sites'

export default function AboutUs() {
  return (
    <>
      <ContentBox>
        <CompanyInfo site={Sites.YDPI} />
      </ContentBox>
      <ContentBox bgcolor="background.default">
        <AboutUsOurGoal />
      </ContentBox>
    </>
  )
}

const AboutUsOurGoal = () => {
  return (
    <>
      <Title>วิสัยทัศน์</Title>

      <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
        <Typography variant={'body1'} gutterBottom sx={{ textIndent: 40 }}>
          บริษัทของเรามีความมุ่งมั่นที่จะเป็นผู้นำด้านการจัดจำหน่ายอุปกรณ์ก่อสร้างสำหรับตึกสูงในระดับประเทศ
          โดยยึดมั่นในคุณภาพ ความปลอดภัย และการพัฒนานวัตกรรมอย่างต่อเนื่อง เพื่อตอบโจทย์ความต้องการของลูกค้าในทุกระดับ
          ด้วยบริการที่เชื่อถือได้ รวดเร็ว และครบวงจร
          เรามุ่งหวังที่จะเป็นส่วนหนึ่งในการผลักดันอุตสาหกรรมก่อสร้างให้เติบโตอย่างมั่นคง
          พร้อมทั้งสร้างคุณค่าให้แก่สังคมและสิ่งแวดล้อมอย่างยั่งยืน
        </Typography>
      </Box>
    </>
  )
}
