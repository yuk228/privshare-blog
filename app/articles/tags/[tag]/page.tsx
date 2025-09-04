import { Articles } from "@/components/article/articles";
import { notFound } from "next/navigation";
import { getArticleSummaries } from "@/functions/articles/getArticleSummaries";

type Props = {
  params: Promise<{ tag: string }>;
};

export default async function Page({ params }: Props) {
  const { tag } = await params;
  const postSummaries = await getArticleSummaries({ tag });
  if (!postSummaries.length) {
    notFound();
  }
  return <Articles posts={postSummaries} />;
}

export async function generateStaticParams() {
  const posts = await getArticleSummaries();
  const tags = posts.flatMap(post => post.FrontMatter.tags || []);
  return tags.map(tag => ({ tag }));
}
