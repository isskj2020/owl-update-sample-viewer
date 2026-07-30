import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const paths = request.url.split('/')
  if (paths.includes('login') ||
     paths.includes('signup') ||
       paths.includes('api')) {
    return NextResponse.next()
  }
  const session = request.cookies.get('x-session')

  if (!session) {
    /*
    return NextResponse.redirect(
      new URL('/login', request.url)
    )
   */
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/:path',
  ]
}
