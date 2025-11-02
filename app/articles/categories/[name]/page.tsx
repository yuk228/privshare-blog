import { ArticlesList } from '@/components/article/articles'
import { getArticlesSummaries } from '@/services/articles/article'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CATEGORIES_LINKS } from '@/components/layouts/sidebar'
import { prisma } from '@/prisma/prisma'
import Link from 'next/link'

export const revalidate = 7200
export const dynamic = 'force-static'

type Props = {
    params: Promise<{ name: string }>
}

export default async function Page({ params }: Props) {
    const { name } = await params
    const articles = await getArticlesSummaries({
        category: name,
    })

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <aside className="hidden md:block w-80 flex-shrink-0">
                    <div className="sticky top-24">
                        <TableOfContents name={name} />
                    </div>
                </aside>

                <main className="flex-1">
                    <div className="mb-6 md:mb-8">
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                            Featured Articles
                        </h1>
                        <p className="text-sm md:text-base text-muted-foreground">
                            最新の記事とチュートリアル
                        </p>
                    </div>
                    <div className="md:h-[calc(100vh-10rem)]">
                        <ScrollArea className="h-full">
                            <ArticlesList articles={articles} />
                        </ScrollArea>
                    </div>
                </main>
            </div>
        </div>
    )
}

type TableOfContentsProps = {
    name: string
}

async function TableOfContents({ name }: TableOfContentsProps) {
    return (
        <div className="bg-background border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
                カテゴリー
            </h2>
            <nav className="space-y-1">
                {CATEGORIES_LINKS.map(category => (
                    <Link
                        key={category.label}
                        href={category.href}
                        className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-md text-sm transition-colors ${
                            '/articles/categories/' + name === category.href
                                ? 'bg-muted text-foreground'
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                    >
                        {category.icon}
                        <span>{category.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export async function generateStaticParams() {
    const categories = await prisma.article.groupBy({
        by: ['category'],
        where: { isPublished: true },
    })

    return categories.map(({ category }) => ({
        name: category.toLowerCase(),
    }))
}
