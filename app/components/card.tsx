import Image from 'next/image'
import React from 'react'

interface CardProps {
  title: string
  description: string
  imageUrl?: string
}

export const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <Image src={imageUrl ? imageUrl : '/file.svg'} alt={title} className="card-image" width={300} height={300} />
      <div className="card-content">
        <h2 className="card-title my-4">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  )
}
