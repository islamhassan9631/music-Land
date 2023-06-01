-- AlterTable
ALTER TABLE `user` ADD COLUMN `resetExpiresTime` DATETIME(3) NULL,
    ADD COLUMN `resetPasswordToken` VARCHAR(191) NULL;
