'use client'

import { ProductTable } from './products'
import { getProducts } from '@/lib/db/product'
import useSWR from 'swr'

export default function ProductsPage() {
  const { data: products, isLoading: isLoadingProducts } = useSWR('/api/products', () =>
    getProducts({ includeChildren: true }),
  )

  return <ProductTable products={products || []} isLoading={isLoadingProducts} />
}
