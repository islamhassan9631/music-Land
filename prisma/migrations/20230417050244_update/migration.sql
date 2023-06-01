/*
  Warnings:

  - You are about to alter the column `type` on the `music` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to alter the column `songLanguages` on the `music` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(5))` to `VarChar(191)`.
  - You are about to alter the column `type` on the `song` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `VarChar(191)`.
  - You are about to alter the column `songLanguages` on the `song` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(6))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `music` MODIFY `type` VARCHAR(191) NOT NULL,
    MODIFY `songLanguages` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `song` MODIFY `type` VARCHAR(191) NOT NULL,
    MODIFY `songLanguages` VARCHAR(191) NOT NULL;
