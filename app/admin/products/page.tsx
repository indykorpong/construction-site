'use client'

import { ProductTable } from './products'
import { getProducts, ProductData } from '@/lib/db/product'
import useSWR from 'swr'

export default function ProductsPage() {
  const {
    data: products,
    isLoading: isLoadingProducts,
    mutate: updateProdList,
  } = useSWR('/api/products', () => getProducts({ includeChildren: true }))

  const onUpdateProduct = (p: ProductData) => {
    if (!products) return

    const newProducts = [...products]

    for (let i = 0; i < products.length; i++) {
      if (newProducts[i].id === p.id) {
        newProducts[i] = p
        break
      }
    }

    updateProdList(newProducts, { revalidate: false })
  }

  return <ProductTable products={products || []} isLoading={isLoadingProducts} onUpdateProduct={onUpdateProduct} />
}
