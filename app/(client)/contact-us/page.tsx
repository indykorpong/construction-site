import { Box } from '@mui/material'
import { ContentBox } from '../../_components/content-box'
import { MainHeader } from '../../_components/main-header'

export default function ContactUs() {
  return (
    <ContentBox>
      <MainHeader>Contact Us</MainHeader>

      <Box display={'flex'} marginInline={'auto'} marginBlock={'2rem'} gap={'3rem'}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62002.21771647405!2d100.53566594863284!3d13.770513699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61f33834a509%3A0xcd00dc8d2223c801!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4teC4nuC4tSDguYHguK3guJnguJTguYwg4LmA4Lit4LiqIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sen!2sth!4v1740292645718!5m2!1sen!2sth"
          width="700"
          height="500"
          style={{ border: '0' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <Box maxWidth={'42rem'}>
          <MainHeader>สำนักงานใหญ่</MainHeader>
          <br />
          <p>1213/144 ซอยลาดพร้าว 94 ถนนลาดพร้าว แขวงพลับพลา เขตวังทองหลาง กรุงเทพมหานคร 10230</p>
          <br />
          <p>เบอร์โทรศัพท์: 02-375-0944</p>
          <p>อีเมล: test@email.com</p>
          <p>เวลาทำการ: จันทร์ - ศุกร์ 09:00 - 18:00</p>
        </Box>
      </Box>
    </ContentBox>
  )
}
