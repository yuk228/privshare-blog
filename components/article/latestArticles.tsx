import Link from 'next/link'
import Image from 'next/image'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { useLatestArticles } from '@/services/hooks/articles/latest-articles-hooks'
import { ArticleSummaryDto } from '@/entities/articles'
import { formatDate } from '@/services/shared/formatdate'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

export function LatestArticles() {
  const { data: articles, isLoading } = useLatestArticles()

  if (typeof articles === 'undefined' || isLoading) {
    return <Skeleton className="w-full h-48" />
  }

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-4 pb-4">
        {articles.map(article => (
          <LatestArticleCard key={article.uuid} article={article} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

type LatestArticleCardProps = {
  article: ArticleSummaryDto
}

function LatestArticleCard({ article }: LatestArticleCardProps) {
  return (
    <article className="group bg-background border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-foreground/30 flex-shrink-0 w-80">
      <Link href={`/articles/${article.slug}`} className="block">
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            alt={article.title}
            src={
              article.thumbnailUrl ||
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop&crop=center'
            }
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="320px"
          />
        </div>

        <div className="p-4 space-y-3">
          <h2 className="text-lg font-semibold text-foreground line-clamp-2">
            {article.title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {article.description}
          </p>

          <div className="flex items-center gap-3 py-2 border-t border-border">
            <Avatar className="h-7 w-7">
              <AvatarImage
                src={article.author.avatarUrl}
                alt={article.author.name}
              />
              <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                {article.author.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-medium text-foreground">
                {article.author.name}
              </p>
              <time className="text-xs text-muted-foreground">
                {formatDate(article.createdAt)}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
