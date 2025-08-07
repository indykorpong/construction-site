import { ThemeProvider } from '@mui/material'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { mainTheme } from '@/app/theme'

export const metadata: Metadata = {
  title: 'EP&S Group Co., LTD.',
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
}
