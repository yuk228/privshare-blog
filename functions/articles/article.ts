import { prisma } from "@/prisma/prisma";
import { Category, User } from "@/app/generated/prisma";
import {
  ArticleResponse,
  ArticleRequest,
  ArticleSummary,
} from "@/entities/articles";
import { notFound } from "next/navigation";

type GetArticlesSummariesProps = {
  category?: string;
};

export async function getArticlesSummaries(
  params: GetArticlesSummariesProps = {}
): Promise<ArticleSummary[]> {
  const { category } = params;
  const whereClause = category
    ? {
        isPublished: true,
        category: category.toUpperCase() as Category,
      }
    : { isPublished: true };

  const articles = await prisma.article.findMany({
    where: whereClause,
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return articles.map(article => ({
    uuid: article.uuid,
    title: article.title,
    description: article.description,
    slug: article.slug,
    thumbnailUrl: article.thumbnailUrl,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    author: {
      uuid: article.author.uuid,
      name: article.author.name,
      avatarUrl: article.author.avatarUrl || "",
    },
  }));
}

type GetArticleDataProps = {
  slug: string;
};

export async function getArticleData({
  slug,
}: GetArticleDataProps): Promise<ArticleResponse> {
  const article = await prisma.article.findUnique({
    where: { slug },
    include: {
      author: true,
    },
  });
  if (!article) {
    notFound();
  }
  return {
    uuid: article.uuid,
    title: article.title,
    description: article.description,
    body: article.body,
    slug: article.slug,
    thumbnailUrl: article.thumbnailUrl,
    isPublished: article.isPublished,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    author: {
      uuid: article.author.uuid,
      name: article.author.name,
      avatarUrl: article.author.avatarUrl || "",
    },
  };
}

type CreateArticleProps = ArticleRequest & {
  authorId: number;
};

export async function createArticle({
  title,
  body,
  description,
  slug,
  thumbnailUrl,
  authorId,
  isPublished,
}: CreateArticleProps): Promise<ArticleResponse> {
  const article = await prisma.article.create({
    data: {
      title,
      body,
      description,
      slug,
      thumbnailUrl,
      authorId,
      isPublished,
    },
    include: {
      author: true,
    },
  });

  return {
    uuid: article.uuid,
    title: article.title,
    description: article.description,
    body: article.body,
    slug: article.slug,
    thumbnailUrl: article.thumbnailUrl,
    isPublished: article.isPublished,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    author: {
      uuid: article.author.uuid,
      name: article.author.name,
      avatarUrl: article.author.avatarUrl || "",
    },
  };
}

type UpdateArticleProps = ArticleRequest & {
  uuid: string;
};

export async function updateArticle({
  uuid,
  title,
  description,
  body,
  slug,
  thumbnailUrl,
  isPublished,
}: UpdateArticleProps): Promise<ArticleResponse> {
  const article = await prisma.article.update({
    where: { uuid },
    data: { title, description, body, slug, thumbnailUrl, isPublished },
    include: {
      author: true,
    },
  });
  return {
    uuid: article.uuid,
    title: article.title,
    description: article.description,
    body: article.body,
    slug: article.slug,
    thumbnailUrl: article.thumbnailUrl,
    isPublished: article.isPublished,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    author: {
      uuid: article.author.uuid,
      name: article.author.name,
      avatarUrl: article.author.avatarUrl || "",
    },
  };
}

export function canCreateArticle(user: User) {
  return user.role === "OWNER";
}
