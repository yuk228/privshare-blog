import Image from "next/image";
import { getArticleData } from "@/functions/articles/article";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/article/markdown-renderer";
import { prisma } from "@/prisma/prisma";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const article = await getArticleData({ slug });
    return (
      <article className="max-w-4xl mx-auto">
        <div className="mb-8 overflow-hidden rounded-2xl">
          <Image
            alt={article.title}
            src={article.thumbnailUrl || ""}
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>
        </div>

        <div>
          <MarkdownRenderer content={article.body} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const articles = await prisma.article.findMany({
    select: {
      slug: true,
    },
  });
  return articles.map(article => ({
    slug: article.slug,
  }));
}
