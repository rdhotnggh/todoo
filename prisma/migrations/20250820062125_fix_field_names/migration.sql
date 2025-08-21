/*
  Warnings:

  - You are about to drop the column `blabla` on the `todo` table. All the data in the column will be lost.
  - You are about to drop the column `dibuat` on the `todo` table. All the data in the column will be lost.
  - You are about to drop the column `diperbarui` on the `todo` table. All the data in the column will be lost.
  - Added the required column `text` to the `todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `todo` DROP COLUMN `blabla`,
    DROP COLUMN `dibuat`,
    DROP COLUMN `diperbarui`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `text` VARCHAR(10000) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;
