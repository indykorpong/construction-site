'use client'

import { useQuery } from '@tanstack/react-query'
import { ProductTable } from './products'
import { getProducts } from '@/lib/api/product'

export default function ProductsPage() {
  const {
    data: products,
    isLoading: isLoadingProducts,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  })

  return <ProductTable products={products || []} isLoading={isLoadingProducts} refetchProducts={refetchProducts} />
}
