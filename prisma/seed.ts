import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Lam',
    email: 'lam@lam.com',
    password: '$2a$12$8i4QALhUGSo3wFflCfTeDONAQQPcE353sfDdw5DM3d5EfFnDgcjVO',
  },
]

const productData: Prisma.ProductCreateInput[] = [
  {
    name: 'Product 1',
    category: 'Category 1',
    description: 'Description 1',
    images: {
      create: [{ url: '/file.svg' }],
    },
  },
  {
    name: 'Product 2',
    category: 'Category 2',
    description: 'Description 2',
    images: {
      create: [{ url: '/file.svg' }],
    },
  },
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }

  for (const p of productData) {
    await prisma.product.create({ data: p })
  }
}

main()
