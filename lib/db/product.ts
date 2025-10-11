'use server'
import { Image, Product } from '@prisma/client'
import prisma from '../prisma'
import { getImageUrl } from '@/utils/image'
import { minioClient } from '../minio'
import { randomUUID } from 'crypto'

export type ImageData = Image & {
  url?: string
}

export type ChildProductData = Product & {
  images: ImageData[]
  childrenProducts?: (Product & {
    images: ImageData[]
  })[]
}

export type ProductData = Product & {
  images: ImageData[]
  childrenProducts: ChildProductData[]
}

export async function getProducts(
  { includeChildren, siteId }: { includeChildren?: boolean; siteId?: number } = {
    includeChildren: false,
    siteId: 1,
  },
): Promise<ProductData[]> {
  const products = await prisma.product.findMany({
    include: {
      images: {
        orderBy: {
          id: 'asc',
        },
      },
      childrenProducts: {
        include: {
          images: {
            orderBy: {
              id: 'asc',
            },
          },
          childrenProducts: {
            include: {
              images: {
                orderBy: {
                  id: 'asc',
                },
              },
            },
          },
        },
        orderBy: {
          id: 'asc',
        },
      },
    },
    where: {
      ...(includeChildren ? {} : { parentProductId: null }),
      siteId,
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
          childrenProducts: await Promise.all(
            childProduct.childrenProducts.map(async (childProduct) => ({
              ...childProduct,
              images: await Promise.all(childProduct.images.map(getImageUrl)),
            })),
          ),
        })),
      ),
    })),
  )

  return productsData
}

export async function getProduct(id: number, siteId: number): Promise<ProductData> {
  const product = await prisma.product.findUnique({
    where: { id, siteId },
    include: {
      images: {
        orderBy: {
          id: 'asc',
        },
      },
      childrenProducts: {
        include: {
          images: {
            orderBy: {
              id: 'asc',
            },
          },
          childrenProducts: {
            include: {
              images: {
                orderBy: {
                  id: 'asc',
                },
              },
            },
          },
        },
        orderBy: {
          id: 'asc',
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
        childrenProducts: await Promise.all(
          childProduct.childrenProducts.map(async (childProduct) => ({
            ...childProduct,
            images: await Promise.all(childProduct.images.map(getImageUrl)),
          })),
        ),
      })),
    ),
  }

  return productData
}

export async function createProduct(data: ProductData) {
  try {
    return await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        parentProductId: data.parentProductId,
        siteId: data.siteId,
        images: {
          connect: data.images.map((image) => ({
            filePath: image.filePath,
          })),
        },
      },
    })
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error creating product:', err.stack)
    } else {
      console.error('Error creating product:', err)
    }
    throw err
  }
}

export async function updateProduct(id: number, data: ProductData) {
  try {
    const res = await prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        parentProductId: data.parentProductId,
        siteId: data.siteId,
        images: {
          connectOrCreate: data.images.map((image) => ({
            where: {
              id: image.id,
            },
            create: {
              filePath: image.filePath,
            },
          })),
        },
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

    await Promise.all(product.images.map((image) => minioClient.deleteFile(image.filePath)))
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

export async function uploadProductImage(id: number, productName: string, files: File[]): Promise<Image[]> {
  try {
    const images: Image[] = []
    for (const file of files) {
      try {
        if (!file) {
          throw new Error('file not found')
        }

        const fileName = randomUUID()
        const fileObject = `products/${productName.replaceAll(' ', '')}/${fileName}.${file.name.split('.').pop()}`

        await minioClient.uploadFile('construction', fileObject, file)
        const image = await prisma.image.create({
          data: {
            filePath: fileObject,
          },
        })
        if (id && id !== -1) {
          await prisma.product.update({
            where: { id },
            data: {
              images: {
                connect: {
                  id: image.id,
                },
              },
            },
          })
        }
        images.push(image)
      } catch (err) {
        console.error(file.name, err)
        throw err
      }
    }
    return images
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

    await minioClient.deleteFile(image.filePath)
    await prisma.image.delete({
      where: { id },
    })
  } catch (err) {
    console.error('Error deleting image:', err)
    throw err
  }
}
