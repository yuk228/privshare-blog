import fs from "fs"
import matter from 'gray-matter';
import { FrontMatter } from '@/lib/blogs/type';

export async function getPosts(deviceName: string) {
    const files = fs.readdirSync(`./app/blogs/posts/${deviceName}`, "utf-8");
    const posts = files.map((post) => {
      const slug = post.replace(/\.md$/, '');
      const fileContent = fs.readFileSync(`./app/blogs/posts/${deviceName}/${post}`, "utf-8");
      const { data } = matter(fileContent);
      return {
        FrontMatter: data as FrontMatter,
        slug,
      };
    })
    return posts;
  }
