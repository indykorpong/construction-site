import '@/app/globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Box, ThemeProvider } from '@mui/material'
import { Header } from '@/app/_components/header'
import { Footer } from '@/app/_components/footer'
import { Navbar } from '@/app/_components/navbar'
import { epandsTheme } from './theme'
import { Sites } from '@/app/common/enums/sites'

export const metadata: Metadata = {
  title: 'EP&S Co., LTD.',
}

export default function EpandsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider theme={epandsTheme}>
      <Header site={Sites.EPANDS} />
      <Navbar site={Sites.EPANDS} />
      <Box minHeight={'600px'}>{children}</Box>
      <Footer />
    </ThemeProvider>
  )
}
