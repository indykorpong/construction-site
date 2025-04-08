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
          <SmallText>test@email.com</SmallText>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={'1rem'}>
          <FaPhoneAlt color="white" />
          <SmallText>081-234-5678</SmallText>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={'1rem'}>
          <FaRegClock color="white" />
          <SmallText>Mon - Fri: 9:00 - 18:00</SmallText>
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
