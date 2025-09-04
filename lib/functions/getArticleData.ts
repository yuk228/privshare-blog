import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { FrontMatter, PostData } from "@/entities/articles/type";

type Props = {
  slug: string;
};

type GetArticleData = {
  frontMatter: FrontMatter;
  content: string;
};

export async function getArticleData({ slug }: Props): Promise<GetArticleData> {
  const filePath = path.join(process.cwd(), "app/articles/posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    frontMatter: data as FrontMatter,
    content,
  };
}
