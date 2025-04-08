'use client'
import { Grid2, CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { ProductWithImages } from './page'

export default function ProductGrid({ products }: { products: ProductWithImages[] }) {
  const router = useRouter()

  return (
    <Grid2 container spacing={4} columns={24} width="100%">
      {products.map((product, index) => (
        <Grid2 key={index} size={6}>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
              <CardMedia component="img" image={product.images[0]?.url} sx={{ height: 250, boxShadow: 'none' }} />
              <CardContent sx={{ height: 100 }}>
                <Typography variant="h5">{product.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  )
}
