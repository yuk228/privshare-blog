'use server'
import { auth } from '@/auth'
import { validateToken } from '../turnstile'
import { currentUser } from '../users/user'
import { canCreateArticle } from '../articles/article'

// type FormData = {
//   title: string;
//   body: string;
//   description: string;
//   skug: string;
//   thumbnailUrl: string;
//   token: string;
// };

export async function createArticle(pervState: any, formData: FormData) {
  const session = await auth()
  if (!session?.user) {
    return { message: 'Unauthorized' }
  }
  const user = await currentUser({ sessionUser: session.user })
  if (!user || !canCreateArticle(user)) {
    return { message: 'Forbidden' }
  }

  const title = formData.get('test') as string
  const body = formData.get('body') as string
  const description = formData.get('description') as string
  const slug = formData.get('slug') as string
  const thumbnailUrl = formData.get('thumbnailUrl') as string
  const token = formData.get('token') as string

  if (!(await validateToken({ token }))) {
    return { message: 'Invalid Token' }
  }
}
