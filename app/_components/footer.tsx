import { Box, Typography } from '@mui/material'
import { ContentBox } from './content-box'

export function Footer() {
  return (
    <Box bgcolor={'secondary.main'} width={'100%'}>
      <ContentBox>
        <Box display={'flex'} justifyContent={'space-evenly'}>
          <Box maxWidth={'50%'}>
            <Typography variant={'h4'} color={'primary.main'} fontWeight={700} marginBottom={2}>
              Contact Us
            </Typography>
            <Typography variant={'body1'} marginBottom={2}>
              1213/144 ซอยลาดพร้าว 94 ถนนลาดพร้าว แขวงพลับพลา เขตวังทองหลาง กรุงเทพมหานคร 10310
            </Typography>
            <Typography variant={'body1'}>เบอร์โทรศัพท์: 02-375-0944</Typography>
            <Typography variant={'body1'}>อีเมล: test@email.com</Typography>
            <Typography variant={'body1'}>เวลาทำการ: จันทร์ - ศุกร์ 09:00 - 18:00</Typography>
          </Box>
          <Box maxWidth={'50%'}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.5652628151288!2d100.60978247731326!3d13.771001255010535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61f33834a509%3A0xcd00dc8d2223c801!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4teC4nuC4tSDguYHguK3guJnguJTguYwg4LmA4Lit4LiqIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sen!2sth!4v1740294618964!5m2!1sen!2sth"
              width="550"
              height="350"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </ContentBox>
    </Box>
  )
}
