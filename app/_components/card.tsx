import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

import { CardProps } from '../types/components'

export const CardComponent: FC<CardProps> = ({ title, imageUrl = '/file.svg' }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" image={imageUrl} sx={{ boxShadow: 'none', aspectRatio: '1/1' }} />
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight={500} sx={{ height: 50 }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}
