/*
  Warnings:

  - A unique constraint covering the columns `[ideompotencyId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ideompotencyId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalGuest` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `ideompotencyId` INTEGER NOT NULL,
    ADD COLUMN `totalGuest` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `IdeompotenceKey` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `IdeompotenceKey_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Booking_ideompotencyId_key` ON `Booking`(`ideompotencyId`);

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_ideompotencyId_fkey` FOREIGN KEY (`ideompotencyId`) REFERENCES `IdeompotenceKey`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
