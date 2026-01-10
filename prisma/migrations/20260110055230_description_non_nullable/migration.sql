/*
  Warnings:

  - Made the column `description` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
UPDATE "Task"
SET description = 'NO DESCRIPTION'
WHERE description IS NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "description" SET NOT NULL;
