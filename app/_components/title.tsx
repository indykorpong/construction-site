import { Typography } from '@mui/material'
import { FC } from 'react'

interface TitleProps {
  children: string
}

export const Title: FC<TitleProps> = ({ children }) => {
  return (
    <Typography fontFamily={'Noto Sans Thai'} fontSize={'1.875rem'} lineHeight={'2.25rem'} fontWeight={700}>
      {children}
    </Typography>
  )
}
