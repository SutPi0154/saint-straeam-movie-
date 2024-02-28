-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'ADMIN', 'SUPERADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "Role" NOT NULL DEFAULT 'User',
ALTER COLUMN "role" DROP NOT NULL;
