import fs from "fs"
import { getPostData } from "@/lib/blogs/getPostData";
import BlogList from "@/components/blog/BlogList";

export default async function Home({ params }: { params: Promise<{tag: string}>}) {
  const { tag } = await params;
  return (
    <main>
    <div className="min-h-screen px-[50px] py-[100px] md:px-[100px] lg:px-[250px]">
        <BlogList tag={tag}/>
    </div>
</main> 
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync("./app/blogs/posts", "utf-8");
  const slugs = await files.map((file) => file.replace(/\.md$/, ''));
  console.log(slugs);
  const tags = slugs.map(async (slug) => {
    const post = await getPostData(slug);
    return post.frontMatter.tags;
  });
  return tags.map((tag) => ({
    tags: tag,
  }));
}