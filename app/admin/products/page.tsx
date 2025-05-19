import { Product, Image } from '@prisma/client'

import ProductTable from './products'
import { getProducts } from '../../../lib/product'

export type ProductWithImages = Product & {
  images: Image[]
}

export default async function Products() {
  const products = await getProducts()

  return <ProductTable products={products} />
}
