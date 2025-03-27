import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface userData {
  name: string
  email: string
  password: string
}

const userData: userData[] = [
  {
    name: 'Lam',
    email: 'lam@lam.com',
    password: '$2a$12$8i4QALhUGSo3wFflCfTeDONAQQPcE353sfDdw5DM3d5EfFnDgcjVO',
  },
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()
