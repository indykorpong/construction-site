import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Box } from '@mui/material'

import '../globals.css'
import { Header } from '../_components/header'
import { Navbar } from '../_components/navbar'

export const metadata: Metadata = {
  title: 'AA-SP Co., LTD.',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      <Navbar />
      <Box minHeight={'600px'}>{children}</Box>
    </>
  )
}
