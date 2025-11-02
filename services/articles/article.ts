import { prisma } from '@/prisma/prisma'
import { Article, Category, User } from '@/app/generated/prisma'
import { notFound } from 'next/navigation'
import {
  ArticleDto,
  ArticleSummaryDto,
  CreateArticleDto,
  UpdateArticleDto,
} from '@/entities/articles/articles'
import { UserDto } from '@/entities/users/users'

type GetArticlesSummariesProps = {
  category?: string
  limit?: number
}

export async function getArticlesSummaries({
  category,
  limit,
}: GetArticlesSummariesProps): Promise<ArticleSummaryDto[]> {
  const whereClause = category
    ? {
        isPublished: true,
        category: category.toUpperCase() as Category,
      }
    : { isPublished: true }

  const articles = await prisma.article.findMany({
    where: whereClause,
    select: {
      uuid: true,
      title: true,
      description: true,
      slug: true,
      thumbnailUrl: true,
      createdAt: true,
      updatedAt: true,
      author: {
        select: {
          uuid: true,
          name: true,
          avatarUrl: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: limit,
  })
  return articles as ArticleSummaryDto[]
}

type GetArticleDataProps = {
  slug: string
}

export async function getArticleData({
  slug,
}: GetArticleDataProps): Promise<ArticleDto> {
  const article = await prisma.article.findUnique({
    where: { slug },
    include: {
      author: true,
    },
  })
  if (!article) {
    notFound()
  }
  return {
    uuid: article.uuid,
    title: article.title,
    description: article.description,
    body: article.body,
    slug: article.slug,
    thumbnailUrl: article.thumbnailUrl,
    isPublished: article.isPublished,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    author: {
      uuid: article.author.uuid,
      name: article.author.name,
      avatarUrl: article.author.avatarUrl || '',
    },
  }
}

type CreateArticleProps = Omit<CreateArticleDto, 'token'> & {
  authorId: number
}

export async function createArticle({
  title,
  body,
  description,
  slug,
  thumbnailUrl,
  authorId,
  isPublished,
}: CreateArticleProps): Promise<ArticleDto> {
  const article = await prisma.article.create({
    data: {
      title,
      body,
      description,
      slug,
      thumbnailUrl,
      authorId,
      isPublished,
    },
    include: {
      author: true,
    },
  })

  return {
    uuid: article.uuid,
    title: article.title,
    description: article.description,
    body: article.body,
    slug: article.slug,
    thumbnailUrl: article.thumbnailUrl,
    isPublished: article.isPublished,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    author: {
      uuid: article.author.uuid,
      name: article.author.name,
      avatarUrl: article.author.avatarUrl || '',
    },
  }
}

type UpdateArticleProps = Omit<UpdateArticleDto, 'token'>

export async function updateArticle({
  uuid,
  title,
  description,
  body,
  slug,
  thumbnailUrl,
  isPublished,
}: UpdateArticleProps): Promise<ArticleDto> {
  const article = await prisma.article.update({
    where: { uuid },
    data: { title, description, body, slug, thumbnailUrl, isPublished },
    include: {
      author: true,
    },
  })
  return {
    uuid: article.uuid,
    title: article.title,
    description: article.description,
    body: article.body,
    slug: article.slug,
    thumbnailUrl: article.thumbnailUrl,
    isPublished: article.isPublished,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    author: {
      uuid: article.author.uuid,
      name: article.author.name,
      avatarUrl: article.author.avatarUrl || '',
    },
  }
}

export function canCreateArticle(user: User | UserDto) {
  return user.role === 'OWNER' || user.role === 'ADMIN'
}

export function canUpdateArticle(user: User | UserDto, article: ArticleDto) {
  if (user.role === 'OWNER') {
    return true
  }
  if (user.role === 'ADMIN' && user.uuid === article.author.uuid) {
    return true
  }
  return false
}
