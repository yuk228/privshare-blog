'use server'
import { auth } from '@/auth'
import { z } from 'zod'
import { validateToken } from '../turnstile'
import { currentUser } from '../users/user'
import { canCreateArticle, createArticle } from '../articles/article'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const articleSchema = z.object({
  title: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(255, 'Name must be at most 255 characters'),
  body: z.string().min(1, 'Body is required'),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(255, 'Description must be at most 255 characters'),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(255, 'Slug must be at most 255 characters'),
  thumbnailUrl: z
    .string()
    .url('Invalid URL format')
    .max(255, 'Thumbnail URL must be at most 255 characters'),
  token: z.string().min(1, 'Token is required'),
})

export async function createArticleAction(pervState: any, formData: FormData) {
  const session = await auth()
  if (!session?.user) {
    return { message: 'Unauthorized' }
  }
  const user = await currentUser({ sessionUser: session.user })
  if (!user || !canCreateArticle(user)) {
    return { message: 'Forbidden' }
  }

  const articleFormData = Object.fromEntries(formData)
  const validatedArticleFormData = articleSchema.safeParse(articleFormData)
  if (!validatedArticleFormData.success) {
    const formFieldErrors = validatedArticleFormData.error.flatten().fieldErrors
    return {
      errors: {
        title: formFieldErrors?.title,
        body: formFieldErrors?.body,
        description: formFieldErrors?.description,
        slug: formFieldErrors?.slug,
        thumbnailUrl: formFieldErrors?.thumbnailUrl,
        token: formFieldErrors?.token,
      },
    }
  }

  if (!(await validateToken({ token: validatedArticleFormData.data.token }))) {
    return { message: 'Invalid Token' }
  }

  const article = await createArticle({
    title: validatedArticleFormData.data.title,
    body: validatedArticleFormData.data.body,
    description: validatedArticleFormData.data.description,
    slug: validatedArticleFormData.data.slug,
    thumbnailUrl: validatedArticleFormData.data.thumbnailUrl,
    authorId: user.id,
    isPublished: true,
  })

  revalidatePath('/articles')
  revalidatePath('/')

  redirect(`/articles/${article.slug}`)
}
