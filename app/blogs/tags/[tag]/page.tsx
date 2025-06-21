import fs from "fs";
import { getPostData } from "@/lib/blogs/getPostData";
import BlogList from "@/components/blog/BlogList";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  try {
    const files = fs.readdirSync("./app/blogs/posts", "utf-8");
    const slugs = files.map(file => file.replace(/\.md$/, ""));
    const posts = await Promise.all(
      slugs.map(async slug => {
        const post = await getPostData(slug);
        return post;
      })
    );

    const filteredPosts = posts.filter(post =>
      post.frontMatter.tags?.includes(tag)
    );

    if (filteredPosts.length === 0) {
      notFound();
    }

    return (
      <main>
        <div className="min-h-screen px-[50px] py-[100px] md:px-[100px] lg:px-[250px]">
          <BlogList tag={tag} />
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync("./app/blogs/posts", "utf-8");
  const slugs = files.map(file => file.replace(/\.md$/, ""));
  const posts = await Promise.all(
    slugs.map(async slug => {
      const post = await getPostData(slug);
      return post.frontMatter.tags;
    })
  );

  const tags = posts.flat().filter((tag): tag is string => tag !== undefined);
  return tags.map(tag => ({
    tag,
  }));
}
