'use client'
import { Box, Typography } from '@mui/material'
import { ContentBox } from './content-box'
import { useWindowDimensions } from '../../lib/window'
import { useMemo } from 'react'
import { TABLET_MIN_WIDTH } from '../theme'

export function Footer() {
  const { width } = useWindowDimensions()

  const mapWidth = useMemo(() => {
    return width < TABLET_MIN_WIDTH ? 275 : 550
  }, [width])
  const mapHeight = useMemo(() => {
    return width < TABLET_MIN_WIDTH ? 200 : 350
  }, [width])

  const mapMobileSrc =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15500.55440922781!2d100.611884!3d13.770514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61f33834a509%3A0xcd00dc8d2223c801!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4teC4nuC4tSDguYHguK3guJnguJTguYwg4LmA4Lit4LiqIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sen!2sth!4v1748852066960!5m2!1sen!2sth'
  const mapTabletSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.5652628151288!2d100.60978247731326!3d13.771001255010535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61f33834a509%3A0xcd00dc8d2223c801!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4teC4nuC4tSDguYHguK3guJnguJTguYwg4LmA4Lit4LiqIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sen!2sth!4v1740294618964!5m2!1sen!2sth'
  const mapSrc = useMemo(() => {
    return width < TABLET_MIN_WIDTH ? mapMobileSrc : mapTabletSrc
  }, [width])

  return (
    <Box bgcolor={'secondary.main'} width={'100%'}>
      <ContentBox>
        <Box
          display={'flex'}
          justifyContent={'space-evenly'}
          alignItems={{ desktop: 'start', tablet: 'center', mobile: 'center' }}
          flexDirection={{ desktop: 'row', tablet: 'column', mobile: 'column' }}
          gap={{ desktop: '1rem', tablet: '2rem', mobile: '2rem' }}
        >
          <Box maxWidth={{ desktop: '50%', tablet: '100%', mobile: '100%' }}>
            <Typography variant={'h4'} color={'primary.main'} fontWeight={700} marginBottom={2}>
              Contact Us
            </Typography>
            <Typography variant={'body1'} marginBottom={2}>
              1213/144 ซอยลาดพร้าว 94 ถนนลาดพร้าว แขวงพลับพลา เขตวังทองหลาง กรุงเทพมหานคร 10310
            </Typography>
            <Typography variant={'body1'}>เบอร์โทรศัพท์: 083-097-9597</Typography>
            <Typography variant={'body1'}>อีเมล: aasp8860@gmail.com</Typography>
            <Typography variant={'body1'}>เวลาทำการ: จันทร์ - ศุกร์ 08:00 - 17:30 น.</Typography>
          </Box>
          <Box maxWidth={{ desktop: '50%', tablet: '100%', mobile: '100%' }}>
            <iframe
              src={mapSrc}
              width={mapWidth}
              height={mapHeight}
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
