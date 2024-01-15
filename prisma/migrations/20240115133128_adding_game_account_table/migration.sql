-- CreateTable
CREATE TABLE `game_account` (
    `game_account_id` VARCHAR(191) NOT NULL,
    `game_account_name` VARCHAR(191) NOT NULL,
    `game_account_password` VARCHAR(191) NOT NULL,
    `game_account_owner_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`game_account_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `game_account` ADD CONSTRAINT `game_account_game_account_owner_id_fkey` FOREIGN KEY (`game_account_owner_id`) REFERENCES `login`(`userid`) ON DELETE RESTRICT ON UPDATE CASCADE;
