import fs from "fs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostData } from "@/lib/blogs/getPostData";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = await getPostData(slug);
    return (
      <article className="min-h-screen prose prose-lg dark:prose-invert max-w-none">
        <div className="max-w-4xl mx-auto">
          <Image
            alt={post.frontMatter.title}
            src={post.frontMatter.img || ""}
            width={600}
            height={200}
            className="mx-auto object-cover rounded-lg"
          />
          <h1 className="text-4xl font-bold py-5 text-left md:text-center lg:text-center">
            {post.frontMatter.title}
          </h1>
          <div className="flex justify-center">
            {post.frontMatter.tags?.map(tag => (
              <Link
                href={`/blogs/tags/${tag}`}
                className="px-3 py-2 mr-2 mb-2 rounded-md border-2 hover:border-muted-foreground transition-all duration-300"
                key={tag}
              >
                {tag}
              </Link>
            ))}
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ ...props }) => (
                <h2 className="my-3 mt-10 text-3xl font-bold" {...props} />
              ),
              p: ({ ...props }) => <p className="ml-2 pb-1" {...props} />,
              li: ({ ...props }) => (
                <li
                  className="ml-7 my-2 pl-3 border-l-2 border-gray-500"
                  {...props}
                />
              ),
              a: ({ ...props }) => <a className="text-sky-400 hover:text-sky-500 hover:underline" {...props} />,
              code: ({ ...props }) => (
                <code className="bg-gray-400 dark:bg-gray-900" {...props} />
              ),
              img: ({ ...props }) => (
                <Image
                  alt={post.frontMatter.title}
                  src={props.src || ""}
                  width={1000}
                  height={200}
                  className="mx-auto object-cover rounded-lg w-full"
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
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
