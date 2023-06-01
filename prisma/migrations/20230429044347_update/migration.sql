-- DropForeignKey
ALTER TABLE `traks` DROP FOREIGN KEY `traks_favoritelistId_fkey`;

-- AlterTable
ALTER TABLE `traks` MODIFY `favoritelistId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `traks` ADD CONSTRAINT `traks_favoritelistId_fkey` FOREIGN KEY (`favoritelistId`) REFERENCES `favoritelist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
