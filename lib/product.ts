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
  return products
}

export async function getProduct(id: number) {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      images: true,
    },
  })
  return product
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
  return productCategories
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
  return productCategory
}
