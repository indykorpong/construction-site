import { Typography } from '@mui/material'
import { FC } from 'react'

interface MainHeaderProps {
  children: string
}

export const MainHeader: FC<MainHeaderProps> = ({ children }) => {
  return (
    <Typography fontSize={'1.875rem'} lineHeight={'2.25rem'} fontWeight={700}>
      {children}
    </Typography>
  )
}
