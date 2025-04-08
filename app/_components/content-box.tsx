import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'

interface ContentBoxProps {
  children: ReactNode
  bgcolor?: string
}

export const ContentBox: FC<ContentBoxProps> = ({ children, bgcolor }) => {
  return (
    <Box bgcolor={bgcolor}>
      <Box
        marginInline={'auto'}
        display={'flex'}
        maxWidth={'80rem'}
        flexDirection={'column'}
        gap={'1rem'}
        padding={'3rem'}
      >
        {children}
      </Box>
    </Box>
  )
}
