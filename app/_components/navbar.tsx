'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { GiHamburgerMenu } from 'react-icons/gi'
import AaspLogo from '@/public/logo/aasp.png'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClickSiteLink = () => {
    setIsOpen(false)
  }

  const SiteLinks = () => {
    return (
      <>
        <Link href="/" onClick={handleClickSiteLink}>
          <Typography variant="h5" color="text.secondary" fontWeight={700}>
            HOME
          </Typography>
        </Link>
        <Link href="/product-categories" onClick={handleClickSiteLink}>
          <Typography variant="h5" color="text.secondary" fontWeight={700}>
            PRODUCTS
          </Typography>
        </Link>
        <Link href="/projects" onClick={handleClickSiteLink}>
          <Typography variant="h5" color="text.secondary" fontWeight={700}>
            PROJECTS
          </Typography>
        </Link>
        <Link href="/about-us" onClick={handleClickSiteLink}>
          <Typography variant="h5" color="text.secondary" fontWeight={700}>
            ABOUT US
          </Typography>
        </Link>
        <Link href="/contact-us" onClick={handleClickSiteLink}>
          <Typography variant="h5" color="text.secondary" fontWeight={700}>
            CONTACT US
          </Typography>
        </Link>
      </>
    )
  }

  return (
    <Box bgcolor={'white'} width={'100%'} sx={{ boxShadow: 2 }}>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        marginX={'auto'}
        height={{ desktop: '7rem', tablet: '5rem', mobile: '4rem' }}
        maxWidth={'80rem'}
        paddingX={'1rem'}
      >
        <Button
          href="/home"
          sx={{
            width: 'auto',
            height: { desktop: '7rem', tablet: '5rem', mobile: '4rem' },
            paddingY: '0.5rem',
          }}
        >
          <Box
            component="img"
            src={AaspLogo.src}
            alt="AASP Logo"
            height={{ desktop: '6rem', tablet: '4rem', mobile: '3rem' }}
            width={'auto'}
            sx={{ objectFit: 'cover' }}
          />
        </Button>
        <Box
          display={{ desktop: 'flex', tablet: 'none', mobile: 'none' }}
          marginX={'auto'}
          maxWidth={'800px'}
          width={'100%'}
          height={'100%'}
          alignItems={'center'}
          justifyContent={'space-between'}
          fontSize={'1.25rem'}
          fontWeight={'bold'}
        >
          <SiteLinks />
        </Box>
        <Box display={{ desktop: 'none', tablet: 'block', mobile: 'block' }}>
          <Button onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu size={24} />
          </Button>
        </Box>
      </Box>
      {isOpen ? (
        <Box
          bgcolor={'white'}
          zIndex={1000}
          display={'flex'}
          flexDirection={'column'}
          gap={'1rem'}
          padding={'1rem'}
          sx={{
            transition: 'all 0.3s ease-in-out',
            maxHeight: isOpen ? '500px' : '0',
            overflow: 'hidden',
          }}
        >
          <SiteLinks />
        </Box>
      ) : null}
    </Box>
  )
}
