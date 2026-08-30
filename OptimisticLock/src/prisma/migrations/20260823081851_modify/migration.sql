-- AlterTable
ALTER TABLE `Booking` MODIFY `totalGuest` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `IdeompotenceKey` ADD COLUMN `finalized` BOOLEAN NOT NULL DEFAULT false;
