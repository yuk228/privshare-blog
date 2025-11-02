export { auth as middleware } from '@/auth-middleware'

export const config = {
    matcher: [
        '/settings',
        '/articles/new',
        '/articles/(.*)/edit',
        '/users/me',
        '/users/me/edit',
        '/api/v1/users/me/',
    ],
}
