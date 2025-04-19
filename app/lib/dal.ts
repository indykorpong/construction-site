'use server'

import { cookies } from 'next/headers'
import { cache } from 'react'
import { redirect } from 'next/navigation'
import prisma from '../../lib/prisma'
import { decrypt } from './session'

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)

  if (!session?.id) {
    redirect('/login')
  }

  return { isAuth: true, userId: session.id }
})

export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) return null

  try {
    const user = await prisma.user.findUnique({
      where: { id: session.userId },
    })

    return user
  } catch {
    console.log('Failed to fetch user')
    return null
  }
})
