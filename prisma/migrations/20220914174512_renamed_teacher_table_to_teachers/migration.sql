/*
  Warnings:

  - You are about to drop the `teacher` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "teacherDiscipline" DROP CONSTRAINT "teacherDiscipline_teacherId_fkey";

-- DropTable
DROP TABLE "teacher";

-- CreateTable
CREATE TABLE "teachers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teachers_name_key" ON "teachers"("name");

-- AddForeignKey
ALTER TABLE "teacherDiscipline" ADD CONSTRAINT "teacherDiscipline_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
