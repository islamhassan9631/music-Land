-- CreateTable
CREATE TABLE `singers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `info` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `gender` ENUM('male', 'female') NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `type` ENUM('single', 'musicBand') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Musicion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `info` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `gender` ENUM('male', 'female') NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `type` ENUM('single', 'musicBand') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `musicionAlbum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `MusicionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `singerAlbum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `singersId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `musicionAlbum` ADD CONSTRAINT `musicionAlbum_MusicionId_fkey` FOREIGN KEY (`MusicionId`) REFERENCES `Musicion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `singerAlbum` ADD CONSTRAINT `singerAlbum_singersId_fkey` FOREIGN KEY (`singersId`) REFERENCES `singers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
