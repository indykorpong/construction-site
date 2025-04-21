import Link from 'next/link'
import { Box, Button, Typography } from '@mui/material'
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
          <Link href="/">
            <Typography variant="h5" color="text.secondary" fontWeight={700}>
              HOME
            </Typography>
          </Link>
          <Link href="/product-categories">
            <Typography variant="h5" color="text.secondary" fontWeight={700}>
              PRODUCTS
            </Typography>
          </Link>
          <Link href="/projects">
            <Typography variant="h5" color="text.secondary" fontWeight={700}>
              PROJECTS
            </Typography>
          </Link>
          <Link href="/about-us">
            <Typography variant="h5" color="text.secondary" fontWeight={700}>
              ABOUT US
            </Typography>
          </Link>
          <Link href="/contact-us">
            <Typography variant="h5" color="text.secondary" fontWeight={700}>
              CONTACT US
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
