'use server'
import { Product } from '@prisma/client'
import prisma from '../prisma'
import { getImageUrl } from '@/utils/image'
import { minioClient } from '../minio'
import path from 'path'
import { FileWithPath } from 'react-dropzone'
import { minioClient } from './minio'

export type ProductData = Product & {
  images: {
    url: string
  }[]
  childrenProducts: (Product & {
    images: {
      url: string
    }[]
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

export async function updateProduct(id: number, data: Product) {
  try {
    await prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        parentProductId: data.parentProductId,
      },
    })
  } catch (err) {
    console.error('Error updating product:', err)
    throw err
  }
}

export async function uploadProductImage(id: number, productName: string, files: FileWithPath[]) {
  try {
    await Promise.all(
      files.map(async (file) => {
        try {
          if (!file) {
            throw new Error('file not found')
          }

          const fileObject = `products/${productName.replaceAll(' ', '')}/${file.name}`
          console.log('Path: ', fileObject)

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

  try {
  } catch (err) {
    console.error('Error accessing DB: ', err)
    throw err
  }
}
