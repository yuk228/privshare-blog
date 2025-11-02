import { ArticleSummaryDto } from '@/entities/articles'
import useSWR, { mutate } from 'swr'

type UseLatestArticles = {
  data: ArticleSummaryDto[]
  error: Error | undefined
  isLoading: boolean
  reloadArticles: () => void
}

export function useLatestArticles(): UseLatestArticles {
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR('/api/v1/articles/latest', fetcher)
  return {
    data: data?.data ?? [],
    isLoading,
    error,
    reloadArticles: () => mutate('/api/v1/articles/latest'),
  }
}
