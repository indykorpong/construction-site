'use client'
import { Box, Typography } from '@mui/material'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'

export default function ContactUs() {
  return (
    <ContentBox>
      <Title>Contact Us</Title>

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
          <Title>สำนักงานใหญ่</Title>
          <Typography variant={'body1'}>
            1213/144 ซอยลาดพร้าว 94 ถนนลาดพร้าว แขวงพลับพลา เขตวังทองหลาง กรุงเทพมหานคร 10310
          </Typography>
          <br />
          <Typography variant={'body1'}>เบอร์โทรศัพท์: 083-097-9597</Typography>
          <Typography variant={'body1'}>อีเมล: aasp8860@gmail.com</Typography>
          <Typography variant={'body1'}>เวลาทำการ: จันทร์ - ศุกร์ เวลา 8:00 - 17:30 น.</Typography>
        </Box>
      </Box>
    </ContentBox>
  )
}
