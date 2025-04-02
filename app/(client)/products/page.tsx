import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { Box, Link, Typography } from '@mui/material'
import { Product, Image } from '@prisma/client'
import { getProducts } from '@/lib/products'
import ProductGrid from './product-grid'

export type ProductWithImages = Product & {
  images: Image[]
}

export default async function Products() {
  const products = await getProducts()
  return (
    <ContentBox>
      <Title>Products</Title>
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
        <ProductGrid products={products} />
      </Box>
    </ContentBox>
  )
}
