'use client'
import { Grid2, CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { ProductWithImages } from './page'

export default function ProductGrid({ products }: { products: ProductWithImages[] }) {
  const router = useRouter()

  return (
    <Grid2 container spacing={4} columns={24} width="75%">
      {products.map((product, index) => (
        <Grid2 key={index} size={8}>
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
              <CardMedia component="img" height="300" image={product.images[0]?.url} />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  )
}
