/*
  Warnings:

  - Added the required column `thumbnailUrl` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."articles" ADD COLUMN     "thumbnailUrl" VARCHAR(255) NOT NULL;
