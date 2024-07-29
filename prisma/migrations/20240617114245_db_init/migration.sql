-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `indicatedFor` VARCHAR(191) NOT NULL,
    `composition` VARCHAR(191) NOT NULL,
    `team` VARCHAR(191) NOT NULL,
    `guarantee` VARCHAR(191) NOT NULL,
    `approximateDimension` VARCHAR(191) NOT NULL,
    `assessment` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
