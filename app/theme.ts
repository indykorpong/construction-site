'use client'
import { createTheme } from '@mui/material'

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
export const DESKTOP_MIN_WIDTH = 1024

export const theme = createTheme({
  palette: {
    primary: {
      main: '#32ADE6',
    },
    secondary: {
      main: '#CFD8DC',
    },
    text: {
      primary: '#000000',
      secondary: '#116FAC',
    },
    background: {
      default: 'aliceblue',
    },
  },
  typography: {
    fontFamily: 'Noto Sans Thai, sans-serif',
    h4: {
      fontSize: '1.875rem',
      lineHeight: '2.5rem',
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
      mobile: 0,
      tablet: 600,
      desktop: 1200,
    },
  },
})
