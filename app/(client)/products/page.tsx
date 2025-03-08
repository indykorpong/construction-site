'use client'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid2, Link, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Products() {
  const router = useRouter()
  return (
    <Box maxWidth={1280} marginX="auto" p={4}>
      <Typography variant="h1" fontSize={40} fontWeight={600} marginBottom={4}>
        Products For Sale
      </Typography>
      <Box display="flex">
        <Box width="25%" marginRight={4}>
          <Typography variant="h2" fontSize={24} fontWeight={600} marginBottom={2}>
            Categories
          </Typography>
          <Box width="100%" maxHeight={300} overflow="auto">
            {Array.from({ length: 9 }).map((_, index) => (
              <Link key={index} href={`/products/${index + 1}`} display="block" underline="none" paddingBottom={1}>
                Product {index + 1}
              </Link>
            ))}
          </Box>
        </Box>
        <Grid2 container spacing={4} columns={24} width="75%">
          {Array.from({ length: 9 }).map((_, index) => (
            <Grid2 key={index} size={8}>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea onClick={() => router.push(`/products/${index + 1}`)}>
                  <CardMedia component="img" height="300" image="/file.svg" />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Product {index + 1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Product {index + 1} description
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  )
}
