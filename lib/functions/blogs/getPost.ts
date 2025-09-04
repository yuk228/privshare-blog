import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FrontMatter, PostSummary } from "@/lib/blogs/type";

export async function getPostSummaries(tag?: string): Promise<PostSummary[]> {
  const postsDir = path.join(process.cwd(), "app/blogs/posts");
  const files = fs.readdirSync(postsDir, "utf-8");
  const posts = files.map(post => {
    const slug = post.replace(/\.md$/, "");
    const filePath = path.join(postsDir, post);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      FrontMatter: data as FrontMatter,
      slug,
    };
  });
  if (tag) {
    return posts.filter(post => post.FrontMatter.tags?.includes(tag));
  }
  return posts;
}
