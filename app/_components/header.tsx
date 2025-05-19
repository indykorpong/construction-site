import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { FaRegEnvelope, FaPhoneAlt, FaRegClock } from 'react-icons/fa'

export function Header() {
  return (
    <Box width={'100%'} bgcolor={'primary.main'}>
      <Box
        marginInline={'auto'}
        display={'flex'}
        height={'3rem'}
        maxWidth={'80rem'}
        alignItems={'center'}
        gap={'2rem'}
        paddingInline={'0.5rem'}
      >
        <Box display={'flex'} alignItems={'center'} gap={'1rem'}>
          <FaRegEnvelope color="white" />
          <SmallText>aasp8860@gmail.com</SmallText>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={'1rem'}>
          <FaPhoneAlt color="white" />
          <SmallText>083-097-9597</SmallText>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={'1rem'}>
          <FaRegClock color="white" />
          <SmallText>จันทร์ - ศุกร์ 08:00 - 17:30 น.</SmallText>
        </Box>
      </Box>
    </Box>
  )
}

function SmallText({ children }: { children: ReactNode }) {
  return (
    <Typography variant="body2" color="white">
      {children}
    </Typography>
  )
}
