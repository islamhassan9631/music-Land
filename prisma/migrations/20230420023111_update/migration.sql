/*
  Warnings:

  - You are about to alter the column `gender` on the `profile` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `profile` MODIFY `gender` VARCHAR(191) NOT NULL;
