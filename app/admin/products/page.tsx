import { Product, Image } from '@prisma/client'
import { getProducts } from '../../../lib/product'
import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import ProductEditor from './products'

export type ProductWithImages = Product & {
  images: Image[]
}

export default async function Products() {
  const products = await getProducts()

  return (
    <ContentBox sx={{ display: 'flex' }}>
      <Title>Products</Title>
      <ProductEditor products={products} />
    </ContentBox>
  )
}
