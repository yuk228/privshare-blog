'use client'
import { useArticle } from '@/functions/hooks/articles/article-hook'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()
  const slug = params.slug as string
  const { article, isLoading } = useArticle({ slug })
  return <div>Edit Article {isLoading ? 'Loading...' : article.title}</div>
}
