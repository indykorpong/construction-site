import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Box } from '@mui/material'

import '@/app/globals.css'
import { Header } from '@/app/_components/header'
import { Footer } from '@/app/_components/footer'
import { Navbar } from '@/app/_components/navbar'

export const metadata: Metadata = {
  title: 'AA-SP Co., LTD.',
}

export default function AaspLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      <Navbar />
      <Box minHeight={'600px'}>{children}</Box>
      <Footer />
    </>
  )
}
