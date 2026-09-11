/*
  Warnings:

  - Made the column `city` on table `GamerProfile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "GamerProfile" ALTER COLUMN "city" SET NOT NULL;
