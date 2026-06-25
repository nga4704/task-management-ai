/*
  Warnings:

  - The primary key for the `team_invites` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `email` on the `team_invites` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `expires_at` to the `team_invites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invited_by` to the `team_invites` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `team_invites` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "team_invites" DROP CONSTRAINT "team_invites_pkey",
ADD COLUMN     "expires_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "invited_by" UUID NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "status" SET DEFAULT 'PENDING',
ADD CONSTRAINT "team_invites_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "team_invites" ADD CONSTRAINT "team_invites_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
