import { Ok } from "@/functions/api/responses";
import { getArticlesSummaries } from "@/functions/articles/article";

export async function GET() {
  const articles = await getArticlesSummaries({ limit: 7 });

  return Ok(articles);
}
