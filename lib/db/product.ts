'use server'
import { Image, Product } from '@prisma/client'
import prisma from '../prisma'
import { getImageUrl } from '@/utils/image'
import { minioClient } from '../minio'
import { randomUUID } from 'crypto'

export type ProductData = Product & {
  images: Image[]
  childrenProducts: (Product & {
    images: Image[]
  })[]
}

export async function getProducts(
  { includeChildren }: { includeChildren?: boolean } = { includeChildren: false },
): Promise<ProductData[]> {
  const products = await prisma.product.findMany({
    include: {
      images: true,
      childrenProducts: {
        include: {
          images: true,
        },
      },
    },
    where: includeChildren
      ? {}
      : {
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

export async function getProduct(id: number): Promise<ProductData> {
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
    throw new Error('Product not found')
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

export async function createProduct(data: Product) {
  try {
    return await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        parentProductId: data.parentProductId,
      },
    })
  } catch (err) {
    console.error('Error creating product:', err)
    throw err
  }
}

export async function updateProduct(id: number, data: Product) {
  try {
    const res = await prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        parentProductId: data.parentProductId,
      },
    })

    return res
  } catch (err) {
    console.error('Error updating product:', err)
    throw err
  }
}

export async function deleteProduct(id: number) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { images: true },
    })

    if (!product) {
      throw new Error('Product not found')
    }

    await Promise.all(product.images.map((image) => minioClient.deleteFile(image.url)))
    await prisma.image.findMany({ where: { productId: id } })
    await prisma.product.delete({
      where: { id },
      include: {
        images: true,
      },
    })

    console.log('Product deleted successfully:', id)
  } catch (err) {
    console.error('Error deleting product:', err)
    throw err
  }
}

export async function uploadProductImage(id: number, productName: string, files: File[]) {
  try {
    await Promise.all(
      files.map(async (file) => {
        try {
          if (!file) {
            throw new Error('file not found')
          }

          const fileName = randomUUID()
          const fileObject = `products/${productName.replaceAll(' ', '')}/${fileName}.${file.name.split('.').pop()}`

          await minioClient.uploadFile('construction', fileObject, file)
          await prisma.product.update({
            where: { id },
            data: {
              images: {
                create: {
                  url: fileObject,
                },
              },
            },
          })
        } catch (err) {
          console.error(file.name, err)
          throw err
        }
      }),
    )
  } catch (err) {
    console.error('Error uploading: ', err)
    throw err
  }
}

export async function deleteProductImage(id: number) {
  try {
    const image = await prisma.image.findUnique({
      where: { id },
    })

    if (!image) {
      throw new Error('Image not found')
    }

    await minioClient.deleteFile(image.url)
    await prisma.image.delete({
      where: { id },
    })
  } catch (err) {
    console.error('Error deleting image:', err)
    throw err
  }
}
