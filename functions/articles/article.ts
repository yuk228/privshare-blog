import { prisma } from "@/prisma/prisma";
import { User } from "@/app/generated/prisma";
import { ArticleResponse, ArticleRequest } from "@/entities/articles";

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
