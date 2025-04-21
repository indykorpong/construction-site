import { Typography } from '@mui/material'
import { FC } from 'react'

interface TitleProps {
  children: string
}

export const Title: FC<TitleProps> = ({ children }) => {
  return (
    <Typography variant={'h4'} fontWeight={700} marginBottom={'2rem'} color={'text.secondary'}>
      {children}
    </Typography>
  )
}
