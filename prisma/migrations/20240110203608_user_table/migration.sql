-- CreateTable
CREATE TABLE `user_account` (
    `user_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_password` VARCHAR(191) NOT NULL,
    `sex` ENUM('M', 'F', 'S') NOT NULL,
    `birth_date` DATETIME(3) NULL,
    `discord_id` VARCHAR(191) NULL,
    `last_login_date` DATETIME(3) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
