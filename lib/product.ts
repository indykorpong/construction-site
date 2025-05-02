import { minioClient } from './minio'
import prisma from './prisma'

export async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      images: true,
    },
    orderBy: {
      id: 'asc',
    },
  })

  const productsData = await Promise.all(
    products.map(async (product) => ({
      ...product,
      images: await Promise.all(
        product.images.map(async (image) => {
          image.url = await minioClient.getFileUrl(image.url)
          return image
        }),
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
    },
  })

  if (!product) {
    return null
  }

  const productData = {
    ...product,
    images: await Promise.all(
      product.images.map(async (image) => {
        image.url = await minioClient.getFileUrl(image.url)
        return image
      }),
    ),
  }

  return productData
}

export async function getProductCategories() {
  const productCategories = await prisma.productCategory.findMany({
    include: {
      products: {
        include: {
          images: true,
        },
      },
    },
    orderBy: {
      id: 'asc',
    },
  })

  const productCategoriesData = await Promise.all(
    productCategories.map(async (productCategory) => ({
      ...productCategory,
      products: await Promise.all(
        productCategory.products.map(async (product) => ({
          ...product,
          images: await Promise.all(
            product.images.map(async (image) => {
              image.url = await minioClient.getFileUrl(image.url)
              return image
            }),
          ),
        })),
      ),
    })),
  )

  return productCategoriesData
}

export async function getProductCategory(id: number) {
  const productCategory = await prisma.productCategory.findUnique({
    where: { id },
    include: {
      products: {
        include: {
          images: true,
        },
      },
    },
  })

  if (!productCategory) {
    return null
  }

  const productCategoryData = {
    ...productCategory,
    products: await Promise.all(
      productCategory?.products.map(async (product) => ({
        ...product,
        images: await Promise.all(
          product.images.map(async (image) => {
            image.url = await minioClient.getFileUrl(image.url)
            return image
          }),
        ),
      })),
    ),
  }

  return productCategoryData
}
