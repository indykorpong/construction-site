import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Box } from '@mui/material'
import { Noto_Sans_Thai } from 'next/font/google'

import '../globals.css'
import { Header } from '../_components/header'
import { Navbar } from '../_components/navbar'

export const metadata: Metadata = {
  title: 'AA-SP Co., LTD.',
}

const notoSansThai = Noto_Sans_Thai({
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={notoSansThai.className}>
      <body style={{ fontSize: '1.125rem', lineHeight: '2rem' }}>
        <Header />
        <Navbar />
        <Box minHeight={'600px'}>{children}</Box>
      </body>
    </html>
  )
}
