import { Articles } from "@/components/article/articles";
import { getArticleSummaries } from "@/functions/articles/getArticleSummaries";

export default async function Home() {
  const posts = await getArticleSummaries(); // 引数なしで呼び出し
  return <Articles posts={posts} />;
}
