-- AlterTable
ALTER TABLE "products" ADD COLUMN     "projectId" INTEGER;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
