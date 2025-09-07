import { Article as PrismaArticle, User } from "@/app/generated/prisma";

export type ArticleRequest = {
  title: string;
  description: string;
  body: string;
  slug: string;
  thumbnailUrl: string;
  isPublished: boolean;
};

export type ArticleResponse = {
  uuid: string;
  title: string;
  description: string;
  body: string;
  slug: string;
  thumbnailUrl: string;
  isPublished: boolean;
  author: {
    uuid: string;
    name: string;
    avatarUrl: string;
  };
  createdAt: Date;
  updatedAt: Date;
};

export type ArticleSummary = {
  uuid: string;
  title: string;
  description: string;
  slug: string;
  thumbnailUrl: string;
  createdAt: Date;
  updatedAt: Date;
  author: {
    uuid: string;
    name: string;
    avatarUrl: string;
  };
};
