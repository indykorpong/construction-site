import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { FC } from 'react'

import { CardProps } from '../types/components'

export const CardComponent: FC<CardProps> = ({ title, description, imageUrl }) => {
  const imgDim = 50

  return (
    <Card>
      {imageUrl ? (
        <CardMedia component="img" height={50} image={imageUrl} alt={title} />
      ) : (
        <div className="flex justify-center">
          <Image src={'/file.svg'} alt={title} width={imgDim} height={imgDim} />
        </div>
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
