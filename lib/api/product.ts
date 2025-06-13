import { ProductData } from '@/lib/db/product'

export const getProducts = async (): Promise<ProductData[]> => {
  const res = await fetch('/api/products?includeChildren=true')

  if (!res.ok) {
    console.error('Failed to fetch products')
    throw new Error('Failed to fetch products')
  }

  return await res.json()
}

export const getProduct = async (id: string): Promise<ProductData> => {
  const res = await fetch(`/api/products/${id}`)

  if (!res.ok) {
    console.error('Failed to fetch product')
    throw new Error('Failed to fetch product')
  }

  return await res.json()
}

export const createProduct = async (product: ProductData): Promise<void> => {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': `application/json` },
    body: JSON.stringify(product),
  })

  if (!res.ok) {
    console.error('Failed to create product')
    throw new Error('Failed to create product')
  }
}

export const updateProduct = async (id: number, data: ProductData): Promise<ProductData> => {
  const res = await fetch(`/api/products`, {
    method: 'PUT',
    headers: { 'Content-Type': `application/json` },
    body: JSON.stringify({ id, data }),
  })

  if (!res.ok) {
    console.error('Failed to update product')
    throw new Error('Failed to update product')
  }

  return res.json()
}
