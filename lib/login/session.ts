'use server'
import { SignJWT, jwtVerify } from 'jose'
import { SessionPayload } from '@/lib/login/definitions'
import { cookies } from 'next/headers'

const jwtKey = process.env.JWT_KEY

if (!jwtKey || jwtKey.length === 0) {
  throw new Error('JWT_KEY is not set in environment variables')
}

const encodedKey = new TextEncoder().encode(jwtKey)

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })

    return payload as SessionPayload
  } catch {
    return null
  }
}

type CookieOptions = {
  httpOnly: boolean
  secure: boolean
  sameSite: 'lax' | 'strict' | 'none'
  path: string
}

const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'lax',
  path: '/',
}

export async function createSession(id: number, siteId: number) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ userId: id, siteId })
  const cookieStore = await cookies()

  cookieStore.set('session', session, {
    ...cookieOptions,
    expires,
  })
  cookieStore.set('siteId', siteId.toString(), {
    ...cookieOptions,
    httpOnly: false,
    expires,
  })
}

export async function updateSession() {
  const session = (await cookies()).get('session')?.value
  const payload = await decrypt(session)

  if (!session || !payload) {
    return null
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  const cookieStore = await cookies()
  cookieStore.set('session', session, {
    ...cookieOptions,
    expires,
  })
  cookieStore.set('siteId', payload.siteId.toString(), {
    ...cookieOptions,
    httpOnly: false,
    expires,
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  cookieStore.delete('siteId')
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  return session ? await decrypt(session) : null
}
