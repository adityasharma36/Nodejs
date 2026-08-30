/*
  Warnings:

  - You are about to drop the column `ideompotencyId` on the `Booking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[BookingId]` on the table `IdeompotenceKey` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `BookingId` to the `IdeompotenceKey` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_ideompotencyId_fkey`;

-- DropIndex
DROP INDEX `Booking_ideompotencyId_key` ON `Booking`;

-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `ideompotencyId`;

-- AlterTable
ALTER TABLE `IdeompotenceKey` ADD COLUMN `BookingId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `IdeompotenceKey_BookingId_key` ON `IdeompotenceKey`(`BookingId`);

-- AddForeignKey
ALTER TABLE `IdeompotenceKey` ADD CONSTRAINT `IdeompotenceKey_BookingId_fkey` FOREIGN KEY (`BookingId`) REFERENCES `Booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
