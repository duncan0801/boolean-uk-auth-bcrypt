/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[guestId]` on the table `Outfit` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupation` to the `Guest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Designer" ALTER COLUMN "firstName" SET DATA TYPE TEXT,
ALTER COLUMN "lastName" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "occupation" TEXT NOT NULL,
ALTER COLUMN "firstName" SET DATA TYPE TEXT,
ALTER COLUMN "lastName" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Model" ALTER COLUMN "firstName" SET DATA TYPE TEXT,
ALTER COLUMN "lastName" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Outfit" ALTER COLUMN "guestId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ticket" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "guestId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event.name_unique" ON "Event"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Outfit_guestId_unique" ON "Outfit"("guestId");

-- AddForeignKey
ALTER TABLE "ticket" ADD FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
