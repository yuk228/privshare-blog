import { Ok } from '@/services/api/responses'
import { getArticlesSummaries } from '@/services/articles/article'

export async function GET() {
    const articles = await getArticlesSummaries({ limit: 7 })

    return Ok(articles)
}
