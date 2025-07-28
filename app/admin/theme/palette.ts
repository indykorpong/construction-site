'use client'
import { PaletteOptions } from '@mui/material'
import { aaspPalette } from '@/app/(client)/aasp/theme/palette'
import { ydpiPalette } from '@/app/(client)/ydpi/theme/palette'
import { epandsPalette } from '@/app/(client)/epands/theme/palette'

export const adminPalette = (siteId: number): PaletteOptions => {
  switch (siteId) {
    case 1:
      return aaspPalette
    case 2:
      return ydpiPalette
    case 3:
      return epandsPalette
    default:
      return aaspPalette
  }
}
