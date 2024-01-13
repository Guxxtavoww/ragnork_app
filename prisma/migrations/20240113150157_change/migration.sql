/*
  Warnings:

  - Made the column `account_id` on table `login` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `login` MODIFY `account_id` VARCHAR(191) NOT NULL;
