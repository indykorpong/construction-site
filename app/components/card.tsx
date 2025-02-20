import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  imageUrl?: string
}

export const CardComponent: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {imageUrl ? (
        <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      ) : (
        <div className="flex justify-center">
          <Image src={'/file.svg'} alt={title} width={100} height={100} />
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
