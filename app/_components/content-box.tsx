import { Box, SxProps } from '@mui/material'
import { FC, ReactNode } from 'react'

type ContentBox = {
  children: ReactNode
  bgcolor?: string
  sx?: SxProps
}

export const ContentBox: FC<ContentBox> = ({ children, bgcolor, sx }) => {
  return (
    <Box bgcolor={bgcolor}>
      <Box
        marginInline={'auto'}
        display={'flex'}
        maxWidth={'80rem'}
        flexDirection={'column'}
        gap={'1rem'}
        padding={'3rem'}
        sx={{ ...sx }}
      >
        {children}
      </Box>
    </Box>
  )
}
