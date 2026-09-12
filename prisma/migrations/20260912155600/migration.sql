/*
  Warnings:

  - A unique constraint covering the columns `[displayName]` on the table `GamerProfile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GamerProfile_displayName_key" ON "GamerProfile"("displayName");
