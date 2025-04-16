import { ContentBox } from '../../_components/content-box'
import { Title } from '../../_components/title'
import { Product, Image } from '@prisma/client'
import { getProducts } from '@/lib/product'
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
