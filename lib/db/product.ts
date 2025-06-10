'use server'
import { Product } from '@prisma/client'
import prisma from '../prisma'
import { getImageUrl } from '@/utils/image'
import { minioClient } from '../minio'
import path from 'path'
import { FileWithPath } from 'react-dropzone'

export async function getProducts({ includeChildren }: { includeChildren?: boolean } = { includeChildren: false }) {
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
      data: {
        name: data.name,
        description: data.description,
        parentProductId: data.parentProductId,
      },
    })

    return { ok: true, data: res }
  } catch (err) {
    console.error('Error updating product:', err)
    return { ok: false, error: 'Failed to update product ' + err }
  }
}

export async function uploadProductImage(pathname: string, file: FileWithPath[]) {
  if (!file || file.length === 0) {
    return { ok: false, error: 'No file provided' }
  }

  try {
    const failedToUpload: string[] = []

    file.map(async (f) => {
      const filePath = path.join(`/products/`, pathname, f.name)

      if (!f.path) {
        console.error('File path is undefined for file:', f.name)
        return { ok: false, error: `File path is undefined for file ${f.name}` }
      }

      try {
        await minioClient.uploadFile('construction', filePath, f.path)
      } catch (err) {
        console.error('Error uploading file:', err)
        failedToUpload.push(f.name)
      }
    })

    if (failedToUpload.length > 0) {
      console.error('Failed to upload files:', failedToUpload)
    }

    return { ok: true, error: failedToUpload.length > 0 ? 'Some file(s) failed to upload' : null }
  } catch (err) {
    console.error('Error uploading product image:', err)
    return { ok: false, error: 'Failed to upload product image ' }
  }
}
