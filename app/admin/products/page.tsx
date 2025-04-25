import { Product, Image } from '@prisma/client'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { Box } from '@mui/material'

import ProductTable from './products'
import { getProducts } from '../../../lib/product'

export type ProductWithImages = Product & {
  images: Image[]
}

export default async function Products() {
  const products = await getProducts()

  return (
    <ContentBox sx={{ display: 'flex' }}>
      <Title>Products</Title>
      <Box sx={{ display: 'flex', flexGrow: 1, height: '60vh' }}>
        <ProductTable products={products} />
      </Box>
    </ContentBox>
  )
}
