import prisma from './prisma'

export async function getProjects() {
  const projects = await prisma.project.findMany({
    include: {
      images: true,
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
  return projects
}

export async function getProject(id: number) {
  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      images: true,
      products: {
        include: {
          images: true,
        },
      },
    },
  })
  return project
}
