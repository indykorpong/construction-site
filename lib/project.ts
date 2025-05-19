'use server'
import { Project } from '@prisma/client'
import prisma from './prisma'

export async function getProjects() {
  const projects = await prisma.project.findMany({
    include: {
      images: true,
      projectProducts: {
        include: {
          product: {
            include: {
              images: true,
            },
          },
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
      projectProducts: {
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  })
  return project
}

export async function getFourProjects() {
  const projects = await prisma.project.findMany({
    take: 4,
    orderBy: { id: 'asc' },
    include: {
      images: true,
    },
  })
  return projects
}

export async function updateProject(id: number, data: Project) {
  try {
    const res = await prisma.project.update({
      where: { id },
      data,
    })

    return { ok: true, data: res }
  } catch (err) {
    console.error('Error updating project:', err)
    return { ok: false, error: 'Failed to update project ' + err }
  }
}
