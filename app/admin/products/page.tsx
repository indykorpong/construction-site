import { Image, Product } from '@prisma/client'

import { ProductTable } from './products'
import { getProducts } from '@/lib/product'

export type ProductWithImages = Product & {
  images: Image[]
}

export default async function ProductsPage() {
  const products = await getProducts({ includeChildren: true })

  return <ProductTable products={products} />
}
