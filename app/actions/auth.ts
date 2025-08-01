'use server'

import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'

import prisma from '../../lib/prisma'
import { FormState, LoginFormSchema } from '../../lib/login/definitions'
import { createSession, deleteSession } from '../../lib/login/session'

export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { email, password } = validatedFields.data

  const user = await prisma.user.findUnique({
    where: { email: email },
  })

  // If the user doesn't exist, return early
  if (!user) {
    return {
      message: 'Invalid email or password.',
    }
  }

  const passwordMatch = bcrypt.compareSync(password, user.password)

  if (!passwordMatch) {
    return {
      message: 'Invalid email or password.',
    }
  }

  await createSession(user.id, user.siteId ?? 1)

  redirect('/admin')
}

export async function logout() {
  deleteSession()
  redirect('/login')
}
