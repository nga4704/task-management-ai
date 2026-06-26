/*
  Warnings:

  - Added the required column `actor_id` to the `project_activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team_id` to the `project_activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project_activities" ADD COLUMN     "actor_id" UUID NOT NULL,
ADD COLUMN     "task_id" UUID,
ADD COLUMN     "team_id" UUID NOT NULL;

-- CreateIndex
CREATE INDEX "project_activities_team_id_idx" ON "project_activities"("team_id");
