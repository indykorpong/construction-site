'use client'
import { Box, Typography } from '@mui/material'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { useWindowDimensions } from '@/app/lib/window'
import { useMemo } from 'react'
import { TABLET_MIN_WIDTH } from '@/app/theme'

export default function ContactUs() {
  const { width } = useWindowDimensions()

  const mapWidth = useMemo(() => {
    return width < TABLET_MIN_WIDTH ? 275 : 600
  }, [width])
  const mapHeight = useMemo(() => {
    return width < TABLET_MIN_WIDTH ? 200 : 400
  }, [width])

  const mapMobileSrc =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15500.55440922781!2d100.611884!3d13.770514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61f33834a509%3A0xcd00dc8d2223c801!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4teC4nuC4tSDguYHguK3guJnguJTguYwg4LmA4Lit4LiqIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sen!2sth!4v1748852066960!5m2!1sen!2sth'
  const mapTabletSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.5652628151288!2d100.60978247731326!3d13.771001255010535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61f33834a509%3A0xcd00dc8d2223c801!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4teC4nuC4tSDguYHguK3guJnguJTguYwg4LmA4Lit4LiqIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sen!2sth!4v1740294618964!5m2!1sen!2sth'
  const mapSrc = useMemo(() => {
    return width < TABLET_MIN_WIDTH ? mapMobileSrc : mapTabletSrc
  }, [width])

  return (
    <ContentBox>
      <Title>Contact Us</Title>
      <Box
        display={'flex'}
        margin={'auto'}
        gap={'3rem'}
        flexDirection={{ desktop: 'row', tablet: 'column', mobile: 'column' }}
      >
        <Box margin={'auto'}>
          <iframe
            src={mapSrc}
            width={mapWidth}
            height={mapHeight}
            style={{ border: '0' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
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
