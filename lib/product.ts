'use server'
import prisma from './prisma'
import { Product } from '@prisma/client'
import { getImageUrl } from '@/utils/image'

export async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      images: true,
      childrenProducts: {
        include: {
          images: true,
        },
      },
    },
    where: {
      parentProductId: null,
    },
    orderBy: {
      id: 'asc',
    },
  })

  const productsData = await Promise.all(
    products.map(async (product) => ({
      ...product,
      images: await Promise.all(product.images.map(getImageUrl)),
      childrenProducts: await Promise.all(
        product.childrenProducts.map(async (childProduct) => ({
          ...childProduct,
          images: await Promise.all(childProduct.images.map(getImageUrl)),
        })),
      ),
    })),
  )

  return productsData
}

export async function getProduct(id: number) {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      images: true,
      childrenProducts: {
        include: {
          images: true,
        },
      },
    },
  })

  if (!product) {
    return null
  }

  const productData = {
    ...product,
    images: await Promise.all(product.images.map(getImageUrl)),
    childrenProducts: await Promise.all(
      product.childrenProducts.map(async (childProduct) => ({
        ...childProduct,
        images: await Promise.all(childProduct.images.map(getImageUrl)),
      })),
    ),
  }

  return productData
}

export async function updateProduct(id: number, data: Product) {
  try {
    const res = await prisma.product.update({
      where: { id },
      data,
    })

    return { ok: true, data: res }
  } catch (err) {
    console.error('Error updating product:', err)
    return { ok: false, error: 'Failed to update product ' + err }
  }
}
