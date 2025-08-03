'use client'
import { createTheme, ThemeOptions } from '@mui/material'
import { mainPalette } from './palette'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false // removes the `xs` breakpoint
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true // adds the `mobile` breakpoint
    tablet: true
    desktop: true
  }
}

export const MOBILE_MIN_WIDTH = 0
export const TABLET_MIN_WIDTH = 600
export const DESKTOP_MIN_WIDTH = 1200

export const theme = (options: ThemeOptions) =>
  createTheme({
    palette: options.palette,
    typography: {
      fontFamily: 'Noto Sans Thai, sans-serif',
      h1: {
        fontSize: '3rem',
        lineHeight: '3rem',
        fontWeight: 700,
      },
      h3: {
        fontSize: '1.875rem',
        lineHeight: '2.5rem',
      },
      h4: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
      h5: {
        fontSize: '1.25rem',
        lineHeight: '2rem',
      },
      body1: {
        fontSize: '1.125rem',
        lineHeight: '2rem',
      },
    },
    breakpoints: {
      values: {
        mobile: MOBILE_MIN_WIDTH,
        tablet: TABLET_MIN_WIDTH,
        desktop: DESKTOP_MIN_WIDTH,
      },
    },
  })

export const mainTheme = theme({ palette: mainPalette })
