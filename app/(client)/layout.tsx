import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FaRegClock, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'
import { Box } from '@mui/material'

import DoubleASPLogo from '@/public/logo/double-a-s-p.png'

import '../globals.css'

export const metadata: Metadata = {
  title: 'AA-SP Co., LTD.',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap&apos;);
        </style>
      </head>

      <body style={{ fontFamily: 'Noto Sans Thai', fontSize: '1.125rem', lineHeight: '2rem' }}>
        <Header />
        <Navbar />
        <Box minHeight={'600px'}>{children}</Box>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
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

function Navbar() {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-2">
        <img src={DoubleASPLogo.src} alt="Double-A-SP Logo" className="h-full w-auto py-2" />
        <div className="mx-auto flex h-full w-full max-w-[800px] items-center justify-between text-xl font-semibold">
          <Link href="/">HOME</Link>
          <Link href="/products">PRODUCTS</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/about-us">ABOUT US</Link>
          <Link href="/contact-us">CONTACT US</Link>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-bluegray">
      <div className="mx-auto flex h-[450px] max-w-7xl items-center justify-center gap-16 px-2">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
          <br />
          <p>1213/144 ซอยลาดพร้าว 94 ถนนลาดพร้าว แขวงพลับพลา เขตวังทองหลาง กรุงเทพมหานคร 10230</p>
          <br />
          <p>เบอร์โทรศัพท์: 02-375-0944</p>
          <p>อีเมล: test@email.com</p>
          <p>เวลาทำการ: จันทร์ - ศุกร์ 09:00 - 18:00</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.5652628151288!2d100.60978247731326!3d13.771001255010535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61f33834a509%3A0xcd00dc8d2223c801!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4teC4nuC4tSDguYHguK3guJnguJTguYwg4LmA4Lit4LiqIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sen!2sth!4v1740294618964!5m2!1sen!2sth"
          width="550"
          height="350"
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  )
}

function SmallText({ children }: { children: ReactNode }) {
  return <p className="text-sm text-white">{children}</p>
}
