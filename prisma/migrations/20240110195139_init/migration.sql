-- CreateTable
CREATE TABLE `character_class` (
    `class_id` VARCHAR(191) NOT NULL,
    `class_description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`class_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
