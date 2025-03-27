import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { FaRegEnvelope, FaPhoneAlt, FaRegClock } from 'react-icons/fa'

export function Header() {
  return (
    <header className="w-full bg-primary">
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
          <FaRegEnvelope />
          <SmallText>test@email.com</SmallText>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={'1rem'}>
          <FaPhoneAlt />
          <SmallText>081-234-5678</SmallText>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={'1rem'}>
          <FaRegClock />
          <SmallText>Mon - Fri: 9:00 - 18:00</SmallText>
        </Box>
      </Box>
    </header>
  )
}

function SmallText({ children }: { children: ReactNode }) {
  return <p className="text-sm text-white">{children}</p>
}
