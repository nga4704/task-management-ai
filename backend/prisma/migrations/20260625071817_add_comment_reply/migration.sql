-- AlterTable
ALTER TABLE "task_comments" ADD COLUMN     "parent_id" UUID;

-- AddForeignKey
ALTER TABLE "task_comments" ADD CONSTRAINT "task_comments_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "task_comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
