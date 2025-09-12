/*
  Warnings:

  - You are about to drop the `article_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('PRIVACY', 'ENCRYPTION', 'OTHER');

-- DropForeignKey
ALTER TABLE "public"."article_tags" DROP CONSTRAINT "article_tags_articleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."article_tags" DROP CONSTRAINT "article_tags_tagId_fkey";

-- AlterTable
ALTER TABLE "public"."articles" ADD COLUMN     "category" "public"."Category" NOT NULL DEFAULT 'OTHER';

-- DropTable
DROP TABLE "public"."article_tags";

-- DropTable
DROP TABLE "public"."tags";
