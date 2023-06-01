-- DropForeignKey
ALTER TABLE `traks` DROP FOREIGN KEY `traks_musicId_fkey`;

-- DropForeignKey
ALTER TABLE `traks` DROP FOREIGN KEY `traks_songId_fkey`;

-- AlterTable
ALTER TABLE `traks` MODIFY `songId` INTEGER NULL,
    MODIFY `musicId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `traks` ADD CONSTRAINT `traks_songId_fkey` FOREIGN KEY (`songId`) REFERENCES `song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `traks` ADD CONSTRAINT `traks_musicId_fkey` FOREIGN KEY (`musicId`) REFERENCES `music`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
