'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { GiHamburgerMenu } from 'react-icons/gi'
import AaspLogo from '@/public/logo/aasp.png'
import YdpiLogo from '@/public/logo/ydpi.jpg'
import EpsLogo from '@/public/logo/eps.jpg'
import { Sites } from '../common/enums/sites'

type MenuItem = {
  label: string
  href: string
}

const menuItems: Record<Sites, MenuItem[]> = {
  [Sites.AASP]: [
    {
      label: 'HOME',
      href: '/',
    },
    {
      label: 'PRODUCTS',
      href: '/product-categories',
    },
    {
      label: 'PROJECTS',
      href: '/projects',
    },
    {
      label: 'ABOUT US',
      href: '/about-us',
    },
    {
      label: 'CONTACT US',
      href: '/contact-us',
    },
  ],
  [Sites.YDPI]: [
    {
      label: 'HOME',
      href: '/',
    },
    {
      label: 'PRODUCTS',
      href: '/product-categories',
    },
    {
      label: 'PROJECTS',
      href: '/projects',
    },
    {
      label: 'ABOUT US',
      href: '/about-us',
    },
    {
      label: 'CONTACT US',
      href: '/contact-us',
    },
  ],
  [Sites.EPS]: [
    {
      label: 'HOME',
      href: '/',
    },
  ],
}

export function Navbar({ site = Sites.AASP }: { site?: Sites }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClickSiteLink = () => {
    setIsOpen(false)
  }

  const logo = useMemo(() => {
    switch (site) {
      case Sites.AASP:
        return AaspLogo
      case Sites.YDPI:
        return YdpiLogo
      case Sites.EPS:
        return EpsLogo
    }
  }, [site])

  const SiteLinks = ({ site }: { site: Sites }) => {
    return menuItems[site].map((item) => (
      <Link key={item.label} href={item.href} onClick={handleClickSiteLink}>
        <Typography variant="h5" color="text.secondary" fontWeight={700}>
          {item.label}
        </Typography>
      </Link>
    ))
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
            src={logo.src}
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
          <SiteLinks site={site} />
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
          <SiteLinks site={site} />
        </Box>
      ) : null}
    </Box>
  )
}
