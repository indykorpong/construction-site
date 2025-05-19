/*
  Warnings:

  - You are about to drop the column `productCategoryId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `product_category` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[parentProductId]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_productCategoryId_fkey";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "productCategoryId",
ADD COLUMN     "parentProductId" INTEGER,
ADD COLUMN     "productId" INTEGER,
ALTER COLUMN "description" DROP NOT NULL;

-- DropTable
DROP TABLE "product_category";

-- CreateIndex
CREATE UNIQUE INDEX "product_parentProductId_key" ON "product"("parentProductId");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_parentProductId_fkey" FOREIGN KEY ("parentProductId") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
