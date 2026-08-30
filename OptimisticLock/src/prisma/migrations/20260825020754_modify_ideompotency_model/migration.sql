/*
  Warnings:

  - You are about to drop the column `key` on the `IdeompotenceKey` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idemKey]` on the table `IdeompotenceKey` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idemKey` to the `IdeompotenceKey` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `IdeompotenceKey_key_key` ON `IdeompotenceKey`;

-- AlterTable
ALTER TABLE `IdeompotenceKey` DROP COLUMN `key`,
    ADD COLUMN `idemKey` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `IdeompotenceKey_idemKey_key` ON `IdeompotenceKey`(`idemKey`);
