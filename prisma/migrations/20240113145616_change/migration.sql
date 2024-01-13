/*
  Warnings:

  - The primary key for the `login` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userid]` on the table `login` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `login_account_id_key` ON `login`;

-- AlterTable
ALTER TABLE `login` DROP PRIMARY KEY,
    MODIFY `account_id` VARCHAR(191) NULL,
    MODIFY `discord_id` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`userid`);

-- CreateIndex
CREATE UNIQUE INDEX `login_userid_key` ON `login`(`userid`);
