'use client'
import { createTheme } from '@mui/material'

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
})
