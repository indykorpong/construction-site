import { Typography } from '@mui/material'
import { FC } from 'react'

type Title = {
  children: string
}

export const Title: FC<Title> = ({ children }) => {
  return (
    <Typography
      variant={'h4'}
      fontWeight={700}
      marginBottom={{ desktop: '2rem', tablet: '2rem', mobile: '1rem' }}
      color={'text.secondary'}
    >
      {children}
    </Typography>
  )
}
