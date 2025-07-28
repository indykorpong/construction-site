import '@/app/globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Box, ThemeProvider } from '@mui/material'
import { Header } from '@/app/_components/header'
import { Footer } from '@/app/_components/footer'
import { Navbar } from '@/app/_components/navbar'
import { aaspTheme } from './theme'
import { Sites } from '@/app/common/enums/sites'

export const metadata: Metadata = {
  title: 'Double A SP Co., LTD.',
}

export default function AaspLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider theme={aaspTheme}>
      <Header site={Sites.AASP} />
      <Navbar site={Sites.AASP} />
      <Box minHeight={'600px'}>{children}</Box>
      <Footer />
    </ThemeProvider>
  )
}
