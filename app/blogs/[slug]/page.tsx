import fs from "fs";
import Image from "next/image";
import { getPostData } from "@/lib/blogs/getPostData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MarkdownRenderer } from "@/components/blog/markdown-renderer";

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = await getPostData(slug);
    return (
      <article className="max-w-4xl mx-auto">
        <div className="mb-8 overflow-hidden rounded-2xl">
          <Image
            alt={post.frontMatter.title}
            src={post.frontMatter.img || ""}
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.frontMatter.title}
          </h1>

          {post.frontMatter.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.frontMatter.tags.map(tag => (
                <Link
                  href={`/blogs/tags/${tag}`}
                  className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  key={tag}
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div>
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync("./app/blogs/posts", "utf-8");
  const slugs = await files.map(file => file.replace(/\.md$/, ""));
  return slugs.map(slug => ({
    slug,
  }));
}
