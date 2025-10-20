import { ArticleDto } from '@/entities/articles'
import useSWR, { mutate } from 'swr'

type UseArticleHoosRequest = {
  slug: string
}

type UseArticleHookResponse = {
  article: ArticleDto
  isLoading: boolean
  reloadArticle: () => void
}

export function useArticle({
  slug,
}: UseArticleHoosRequest): UseArticleHookResponse {
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/v1/articles/${slug}`, fetcher)
  if (error) {
    console.error(error)
  }

  return {
    article: data,
    isLoading,
    reloadArticle: () => mutate(`/api/v1/articles/${slug}`),
  }
}
