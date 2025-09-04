import { Articles } from "@/components/article/articles";
import { getArticleSummaries } from "@/lib/functions/getArticleSummaries";

export default async function Home() {
  const posts = await getArticleSummaries();
  return <Articles posts={posts} />;
}
