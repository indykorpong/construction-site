import { Typography } from '@mui/material'
import { FC } from 'react'

type Title = {
  children: string
}

export const Title: FC<Title> = ({ children }) => {
  return (
    <Typography variant={'h4'} fontWeight={700} marginBottom={'2rem'} color={'text.secondary'}>
      {children}
    </Typography>
  )
}
