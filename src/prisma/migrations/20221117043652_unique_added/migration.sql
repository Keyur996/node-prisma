/*
  Warnings:

  - A unique constraint covering the columns `[title,is_deleted]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,is_deleted]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_email_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_is_deleted_key" ON "Post"("title", "is_deleted");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_is_deleted_key" ON "User"("email", "is_deleted");
