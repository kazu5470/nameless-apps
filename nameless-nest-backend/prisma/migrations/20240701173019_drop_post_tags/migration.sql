/*
  Warnings:

  - You are about to drop the column `post_id` on the `post_tags` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "post_tags" DROP CONSTRAINT "post_tags_post_id_fkey";

-- AlterTable
ALTER TABLE "post_tags" DROP COLUMN "post_id";
