import Image from 'next/image'
import { getArticleData } from '@/functions/articles/article'
import { notFound } from 'next/navigation'
import { MarkdownRenderer } from '@/components/article/markdown-renderer'
import { prisma } from '@/prisma/prisma'
import { Button } from '@/components/ui/button'
import { Pencil, Trash2 } from 'lucide-react'

export const revalidate = 7200
export const dynamic = 'force-static'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  try {
    const article = await getArticleData({ slug })
    return (
      <article className="max-w-4xl mx-auto">
        <div className="mb-8 overflow-hidden rounded-2xl">
          <Image
            alt={article.title}
            src={article.thumbnailUrl || ''}
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <div className="flex items-start md:items-center justify-between gap-4 mb-8">
          <h1 className="flex-1 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 ml-2 text-muted-foreground">
            <Button variant="ghost" size="sm" aria-label="Delete article">
              <Trash2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" aria-label="Edit article">
              <Pencil className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div>
          <MarkdownRenderer content={article.body} />
        </div>
      </article>
    )
  } catch {
    notFound()
  }
}

export async function generateStaticParams() {
  const articles = await prisma.article.findMany({
    where: {
      isPublished: true,
    },
    select: {
      slug: true,
    },
  })
  return articles.map(article => ({
    slug: article.slug,
  }))
}
