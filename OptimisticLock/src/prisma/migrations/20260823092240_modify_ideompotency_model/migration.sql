/*
  Warnings:

  - You are about to drop the column `BookingId` on the `IdeompotenceKey` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bookingId]` on the table `IdeompotenceKey` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bookingId` to the `IdeompotenceKey` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `IdeompotenceKey` DROP FOREIGN KEY `IdeompotenceKey_BookingId_fkey`;

-- DropIndex
DROP INDEX `IdeompotenceKey_BookingId_key` ON `IdeompotenceKey`;

-- AlterTable
ALTER TABLE `IdeompotenceKey` DROP COLUMN `BookingId`,
    ADD COLUMN `bookingId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `IdeompotenceKey_bookingId_key` ON `IdeompotenceKey`(`bookingId`);

-- AddForeignKey
ALTER TABLE `IdeompotenceKey` ADD CONSTRAINT `IdeompotenceKey_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
