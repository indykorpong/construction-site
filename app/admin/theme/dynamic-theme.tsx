'use client'
import { ThemeProvider } from '@mui/material'
import { ReactNode, useState } from 'react'
import { adminPalette } from './palette'
import { theme } from '@/app/theme'

interface DynamicThemeProviderProps {
  children: ReactNode
  initialSiteId: number
}

export function DynamicThemeProvider({ children, initialSiteId }: DynamicThemeProviderProps) {
  const [currentTheme] = useState(() => {
    return theme({ palette: adminPalette(initialSiteId) })
  })

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
} 