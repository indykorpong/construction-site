import Link from 'next/link'
import { Box, Button } from '@mui/material'
import DoubleASPLogo from '@/public/logo/double-a-s-p.png'

export function Navbar() {
  return (
    <Box bgcolor={'white'} width={'100%'} sx={{ boxShadow: 2 }}>
      <Box display={'flex'} alignItems={'center'} marginX={'auto'} height={'7rem'} maxWidth={'80rem'} paddingX={'1rem'}>
        <Button href="/home" sx={{ width: 'auto', height: '7rem', paddingY: '0.5rem' }}>
          <Box
            component="img"
            src={DoubleASPLogo.src}
            alt="DoubleASP Logo"
            height={'6rem'}
            width={'auto'}
            sx={{ objectFit: 'cover' }}
          />
        </Button>
        <Box
          display={'flex'}
          marginX={'auto'}
          maxWidth={'800px'}
          width={'100%'}
          height={'100%'}
          alignItems={'center'}
          justifyContent={'space-between'}
          fontSize={'1.25rem'}
          fontWeight={'bold'}
        >
          <Link href="/">HOME</Link>
          <Link href="/products">PRODUCTS</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/about-us">ABOUT US</Link>
          <Link href="/contact-us">CONTACT US</Link>
        </Box>
      </Box>
    </Box>
  )
}
