import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'

// Specify protected and public routes

export default async function middleware(req: NextRequest) {
  // Check if the current route is protected
  const path = req.nextUrl.pathname
  const loginPath = path.match(/login/i)
  const isProtectedRoute = path.startsWith('/admin')

  // Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)

  // Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.id) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // Redirect to /admin if /login while already authenticated
  if (loginPath && session?.id) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))
  }

  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
