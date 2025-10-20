import { ArticleSummaryDto } from '@/entities/articles'
import useSWR, { mutate } from 'swr'

type UseLatestArticles = {
  data: ArticleSummaryDto[]
  isLoading: boolean
  reloadArticles: () => void
}

export function useLatestArticles(): UseLatestArticles {
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR('/api/v1/articles/latest', fetcher)
  return {
    data,
    isLoading,
    reloadArticles: () => mutate('/api/v1/articles/latest'),
  }
}
