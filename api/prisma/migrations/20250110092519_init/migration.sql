/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Student` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;
