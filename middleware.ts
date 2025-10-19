export { auth as middleware } from '@/auth-middleware'

export const config = {
  matcher: [
    '/settings',
    '/users/me',
    '/users/me/edit',
    '/api/v1/users/me/:path*',
  ],
}
