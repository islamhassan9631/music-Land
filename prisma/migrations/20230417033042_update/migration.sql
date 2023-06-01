/*
  Warnings:

  - You are about to alter the column `type` on the `singers` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(5))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `singers` MODIFY `type` VARCHAR(191) NOT NULL;
