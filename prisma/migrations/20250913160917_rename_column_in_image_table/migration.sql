/*
  Warnings:

  - You are about to drop the column `url` on the `image` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[filePath]` on the table `image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `filePath` to the `image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_siteId_fkey";

-- DropForeignKey
ALTER TABLE "project" DROP CONSTRAINT "project_siteId_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_siteId_fkey";

-- AlterTable
ALTER TABLE "image" RENAME COLUMN "url" TO "filePath";

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "siteId" DROP NOT NULL,
ALTER COLUMN "siteId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "project" ALTER COLUMN "siteId" DROP NOT NULL,
ALTER COLUMN "siteId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "siteId" DROP NOT NULL,
ALTER COLUMN "siteId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "site"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "site"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "site"("id") ON DELETE SET NULL ON UPDATE CASCADE;
