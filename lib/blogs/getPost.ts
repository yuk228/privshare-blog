import fs from "fs";
import matter from "gray-matter";
import { FrontMatter, PostSummary } from "@/lib/blogs/type";

export async function getPostSummaries(tag?: string): Promise<PostSummary[]> {
  const files = fs.readdirSync(`./app/blogs/posts`, "utf-8");
  const posts = files.map(post => {
    const slug = post.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`./app/blogs/posts/${post}`, "utf-8");
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
