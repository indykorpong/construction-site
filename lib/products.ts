import prisma from './prisma'

export async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      images: true,
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
