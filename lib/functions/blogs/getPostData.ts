import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { FrontMatter, PostData } from "../../../entities/blogs/type";

export async function getPostData(slug: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "app/blogs/posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    frontMatter: data as FrontMatter,
    content,
  };
}
