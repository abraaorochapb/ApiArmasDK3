/*
  Warnings:

  - Added the required column `weapon_type` to the `weapon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "weapon" ADD COLUMN     "weapon_type" TEXT NOT NULL;
