import { getArticleData } from '@/services/articles/article'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    const article = await getArticleData({ slug })
    return NextResponse.json(article)
}
