/*
  Warnings:

  - You are about to drop the column `projectId` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_projectId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "projectId";

-- CreateTable
CREATE TABLE "project_product" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "project_product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "project_product" ADD CONSTRAINT "project_product_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_product" ADD CONSTRAINT "project_product_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
