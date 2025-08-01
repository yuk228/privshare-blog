import matter from "gray-matter";
import fs from "fs";
import { FrontMatter, PostData } from "./type";

export async function getPostData(slug: string): Promise<PostData> {
  const fileContent = fs.readFileSync(`./app/blogs/posts/${slug}.md`, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    frontMatter: data as FrontMatter,
    content,
  };
}
