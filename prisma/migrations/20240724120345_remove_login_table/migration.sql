/*
  Warnings:

  - You are about to drop the column `login_id` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the `login` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `pagamento` DROP FOREIGN KEY `Pagamento_usuario_id_fkey`;

-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `usuario_login_id_fkey`;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `login_id`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `password_hash` VARCHAR(191) NOT NULL,
    ADD COLUMN `token` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `login`;

-- CreateIndex
CREATE UNIQUE INDEX `usuario_email_key` ON `usuario`(`email`);

-- AddForeignKey
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
