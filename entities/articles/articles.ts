import { BaseDto } from '..'

export interface UpdateArticleDto extends CreateArticleDto {
  uuid: string
}

export interface ArticleDto extends BaseDto {
  uuid: string
  title: string
  description: string
  body: string
  slug: string
  thumbnailUrl: string
  isPublished: boolean
  author: {
    uuid: string
    name: string
    avatarUrl: string
  }
}

export interface ArticleSummaryDto extends BaseDto {
  uuid: string
  title: string
  description: string
  slug: string
  thumbnailUrl: string
  author: {
    uuid: string
    name: string
    avatarUrl: string
  }
}
export interface CreateArticleDto {
  title: string
  description: string
  body: string
  slug: string
  thumbnailUrl: string
  isPublished: boolean
  token: string
}
