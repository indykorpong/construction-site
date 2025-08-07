import { PaletteColor, PaletteColorOptions, PaletteOptions, TypeBackground, TypeText } from '@mui/material'

interface MyPaletteExtensions {
  primary: {
    main: string
  }
  secondary: {
    main: string
  }
  lightGreen?: {
    main: string
    dark: string
  }
  green?: {
    main: string
    dark: string
  }
  orange?: {
    main: string
    dark: string
  }
  blue?: {
    main: string
    dark: string
  }
  text: {
    primary: string
    secondary: string
  }
  background: {
    default: string
  }
}

declare module '@mui/material/styles' {
  interface Palette extends MyPaletteExtensions {
    primary: PaletteColor
    secondary: PaletteColor
    text: TypeText
    background: TypeBackground
  }
  interface PaletteOptions extends MyPaletteExtensions {
    primary?: PaletteColorOptions
    secondary?: PaletteColorOptions
    text?: Partial<TypeText>
    background?: Partial<TypeBackground>
  }
}

export const mainPalette: PaletteOptions = {
  primary: {
    main: '#32ADE6',
  },
  secondary: {
    main: '#CFD8DC',
  },
  lightGreen: {
    main: '#007F00',
    dark: '#151D19',
  },
  green: {
    main: '#016600',
    dark: '#151D19',
  },
  orange: {
    main: '#ff7f00',
    dark: '#FFFFFF',
  },
  blue: {
    main: '#0389d2',
    dark: '#FFFFFF',
  },
  text: {
    primary: '#000000',
    secondary: '#116FAC',
  },
  background: {
    default: 'aliceblue',
  },
}
