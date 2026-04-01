-- AlterTable
ALTER TABLE `documents` ADD COLUMN `invoiceNumber` VARCHAR(100) NULL,
    ADD COLUMN `notes` TEXT NULL,
    MODIFY `documentType` ENUM('quote_pdf', 'acceptance_pdf', 'payment_receipt', 'invoice_pdf', 'contract', 'other') NOT NULL;
