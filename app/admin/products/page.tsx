'use client'
import { Image, Product } from '@prisma/client'

import { ProductTable } from './products'
import { getProducts } from '@/lib/db/product'
import useSWR from 'swr'

export type ProductWithImages = Product & {
  images: Image[]
}

export default function ProductsPage() {
  const { data: products, isLoading: isLoadingProducts } = useSWR('/api/products', () =>
    getProducts({ includeChildren: true }),
  )

  return <ProductTable products={products || []} isLoading={isLoadingProducts} />
}
