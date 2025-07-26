import { BlogList } from "@/components/blog/blog-list";
import { notFound } from "next/navigation";
import { getPostSummaries } from "@/lib/blogs/getPost";

type Props = {
  params: Promise<{ tag: string }>;
};

export default async function Page({ params }: Props) {
  const { tag } = await params;
  const postSummaries = await getPostSummaries(tag);
  if (!postSummaries.length) {
    notFound();
  }
  return <BlogList posts={postSummaries} />;
}

export async function generateStaticParams() {
  const posts = await getPostSummaries();
  const tags = posts.flatMap(post => post.FrontMatter.tags || []);
  return tags.map(tag => ({ tag }));
}
