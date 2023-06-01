-- CreateTable
CREATE TABLE `song` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `singersId` INTEGER NOT NULL,
    `type` ENUM('classical', 'pop', 'rock', 'metal', 'country', 'love', 'gospel', 'ballads', 'dance') NOT NULL,
    `rate` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `publishedIn` DATETIME(3) NOT NULL,
    `sources` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `songLanguages` ENUM('english', 'arabic', 'france', 'turkish', 'spanish', 'italic', 'latina') NOT NULL,
    `singerAlbumId` INTEGER NOT NULL,

    UNIQUE INDEX `song_singersId_key`(`singersId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `music` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `MusicionId` INTEGER NOT NULL,
    `type` ENUM('piano', 'keyboard', 'recorder', 'classical', 'harp', 'trumpet', 'cello', 'flute', 'saxophone') NOT NULL,
    `rate` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `publishedIn` DATETIME(3) NOT NULL,
    `sources` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `songLanguages` ENUM('english', 'arabic', 'france', 'turkish', 'spanish', 'italic', 'latina') NOT NULL,
    `musicionAlbumId` INTEGER NOT NULL,

    UNIQUE INDEX `music_MusicionId_key`(`MusicionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `song` ADD CONSTRAINT `song_singersId_fkey` FOREIGN KEY (`singersId`) REFERENCES `singers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `song` ADD CONSTRAINT `song_singerAlbumId_fkey` FOREIGN KEY (`singerAlbumId`) REFERENCES `singerAlbum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `music` ADD CONSTRAINT `music_MusicionId_fkey` FOREIGN KEY (`MusicionId`) REFERENCES `Musicion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `music` ADD CONSTRAINT `music_musicionAlbumId_fkey` FOREIGN KEY (`musicionAlbumId`) REFERENCES `musicionAlbum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
