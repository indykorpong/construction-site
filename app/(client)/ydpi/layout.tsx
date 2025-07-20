import '@/app/globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Box, ThemeProvider } from '@mui/material'
import { Header } from '@/app/_components/header'
import { Footer } from '@/app/_components/footer'
import { Navbar } from '@/app/_components/navbar'
import { ydpiTheme } from './theme'
import { Sites } from '@/app/common/enums/sites'

export const metadata: Metadata = {
  title: 'YDPI Co., LTD.',
}

export default function YdpiLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider theme={ydpiTheme}>
      <Header site={Sites.YDPI} />
      <Navbar site={Sites.YDPI} />
      <Box minHeight={'600px'}>{children}</Box>
      <Footer />
    </ThemeProvider>
  )
}
