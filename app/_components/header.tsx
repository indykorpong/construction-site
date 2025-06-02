'use client'
import { Box, Typography } from '@mui/material'
import { ReactNode, useMemo } from 'react'
import { FaRegEnvelope, FaPhoneAlt, FaRegClock } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../theme'
import { useWindowDimensions } from '../../lib/window'

export function Header() {
  const { width } = useWindowDimensions()
  const iconSize = useMemo(() => {
    return width < TABLET_MIN_WIDTH ? 8 : width < DESKTOP_MIN_WIDTH ? 10 : 20
  }, [width])
  return (
    <Box width={'100%'} bgcolor={'primary.main'}>
      <Box
        marginInline={'auto'}
        display={{ desktop: 'flex', tablet: 'flex', mobile: 'none' }}
        height={{ desktop: '3rem', tablet: '2rem', mobile: '1.5rem' }}
        maxWidth={'80rem'}
        alignItems={'center'}
        gap={{ desktop: '2rem', tablet: '1rem', mobile: '0.75rem' }}
        paddingInline={{ desktop: '1rem', tablet: '0.75rem', mobile: '0.5rem' }}
      >
        <IconContext.Provider value={{ color: 'white' }}>
          <HeaderText>
            <FaRegEnvelope size={iconSize} />
            <SmallText>aasp8860@gmail.com</SmallText>
          </HeaderText>
          <HeaderText>
            <FaPhoneAlt size={iconSize} />
            <SmallText>083-097-9597</SmallText>
          </HeaderText>
          <HeaderText>
            <FaRegClock size={iconSize} />
            <SmallText>จันทร์ - ศุกร์ 08:00 - 17:30 น.</SmallText>
          </HeaderText>
        </IconContext.Provider>
      </Box>
    </Box>
  )
}

function HeaderText({ children }: { children: ReactNode }) {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      gap={{ desktop: '1rem', tablet: '0.4rem', mobile: '0.2rem' }}
      lineHeight={{ desktop: '3rem', tablet: '2rem', mobile: '1.5rem' }}
    >
      {children}
    </Box>
  )
}

function SmallText({ children }: { children: ReactNode }) {
  return (
    <Typography
      variant="body2"
      color="white"
      fontSize={{ desktop: '1rem', tablet: '0.7rem', mobile: '0.5rem' }}
      lineHeight={{ desktop: '3rem', tablet: '2rem', mobile: '1.5rem' }}
    >
      {children}
    </Typography>
  )
}
