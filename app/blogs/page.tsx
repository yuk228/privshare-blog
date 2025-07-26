import { BlogList } from "@/components/blog/blog-list";
import { getPostSummaries } from "@/lib/blogs/getPost";

export default async function Home() {
  const posts = await getPostSummaries();
  return <BlogList posts={posts} />;
}
