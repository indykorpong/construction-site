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
      <ProductGrid products={products} />
    </ContentBox>
  )
}
