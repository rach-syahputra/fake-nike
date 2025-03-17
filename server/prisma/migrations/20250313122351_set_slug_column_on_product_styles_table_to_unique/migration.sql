/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `product_styles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "product_styles_slug_key" ON "product_styles"("slug");
