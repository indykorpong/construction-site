import { Product } from '@prisma/client'

export type ProductWithImages = Product & {
  images: {
    url: string
  }[]
}

export const getProducts = async (): Promise<ProductWithImages[]> => {
  const res = await fetch('/api/products?includeChildren=true')

  if (!res.ok) {
    console.error('Failed to fetch products')
    throw new Error('Failed to fetch products')
  }

  return await res.json()
}

export const getProduct = async (id: string): Promise<ProductWithImages> => {
  const res = await fetch(`/api/products/${id}`)

  if (!res.ok) {
    console.error('Failed to fetch product')
    throw new Error('Failed to fetch product')
  }

  return await res.json()
}
