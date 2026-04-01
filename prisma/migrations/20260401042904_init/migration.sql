-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `passwordHash` VARCHAR(255) NOT NULL,
    `role` ENUM('admin', 'sales', 'finance') NOT NULL DEFAULT 'admin',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `businessName` VARCHAR(255) NOT NULL,
    `contactName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(50) NOT NULL,
    `address` TEXT NULL,
    `taxId` VARCHAR(50) NULL,
    `passwordHash` VARCHAR(255) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `clients_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quotes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `createdByUserId` INTEGER NOT NULL,
    `quoteNumber` VARCHAR(50) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `subtotal` DECIMAL(14, 2) NOT NULL DEFAULT 0,
    `discountAmount` DECIMAL(14, 2) NOT NULL DEFAULT 0,
    `taxAmount` DECIMAL(14, 2) NOT NULL DEFAULT 0,
    `totalAmount` DECIMAL(14, 2) NOT NULL DEFAULT 0,
    `currency` VARCHAR(10) NOT NULL DEFAULT 'USD',
    `status` ENUM('draft', 'issued', 'sent', 'viewed', 'partially_accepted', 'fully_accepted', 'rejected', 'expired', 'canceled') NOT NULL DEFAULT 'draft',
    `validUntil` DATETIME(3) NULL,
    `issuedAt` DATETIME(3) NULL,
    `sentAt` DATETIME(3) NULL,
    `viewedAt` DATETIME(3) NULL,
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `quotes_quoteNumber_key`(`quoteNumber`),
    INDEX `quotes_clientId_idx`(`clientId`),
    INDEX `quotes_createdByUserId_idx`(`createdByUserId`),
    INDEX `quotes_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quote_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quoteId` INTEGER NOT NULL,
    `itemOrder` INTEGER NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `quantity` DECIMAL(10, 2) NOT NULL,
    `unitPrice` DECIMAL(14, 2) NOT NULL,
    `subtotal` DECIMAL(14, 2) NOT NULL,
    `status` ENUM('pending', 'accepted', 'rejected') NOT NULL DEFAULT 'pending',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `quote_items_quoteId_idx`(`quoteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quote_acceptances` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quoteId` INTEGER NOT NULL,
    `clientId` INTEGER NOT NULL,
    `acceptanceType` ENUM('full', 'partial') NOT NULL,
    `acceptedTotalAmount` DECIMAL(14, 2) NOT NULL,
    `acceptedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `clientIp` VARCHAR(50) NULL,
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `quote_acceptances_quoteId_idx`(`quoteId`),
    INDEX `quote_acceptances_clientId_idx`(`clientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quote_acceptance_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quoteAcceptanceId` INTEGER NOT NULL,
    `quoteItemId` INTEGER NOT NULL,
    `acceptedPrice` DECIMAL(14, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `quote_acceptance_items_quoteAcceptanceId_idx`(`quoteAcceptanceId`),
    INDEX `quote_acceptance_items_quoteItemId_idx`(`quoteItemId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `quoteId` INTEGER NOT NULL,
    `quoteAcceptanceId` INTEGER NOT NULL,
    `projectNumber` VARCHAR(50) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `totalAmount` DECIMAL(14, 2) NOT NULL,
    `paidAmount` DECIMAL(14, 2) NOT NULL DEFAULT 0,
    `pendingAmount` DECIMAL(14, 2) NOT NULL,
    `paidPercentage` DECIMAL(5, 2) NOT NULL DEFAULT 0,
    `isFullyPaid` BOOLEAN NOT NULL DEFAULT false,
    `status` ENUM('pending_start', 'in_progress', 'completed', 'canceled') NOT NULL DEFAULT 'pending_start',
    `startedAt` DATETIME(3) NULL,
    `finishedAt` DATETIME(3) NULL,
    `canceledAt` DATETIME(3) NULL,
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `projects_quoteAcceptanceId_key`(`quoteAcceptanceId`),
    UNIQUE INDEX `projects_projectNumber_key`(`projectNumber`),
    INDEX `projects_clientId_idx`(`clientId`),
    INDEX `projects_quoteId_idx`(`quoteId`),
    INDEX `projects_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` INTEGER NOT NULL,
    `quoteItemId` INTEGER NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `quantity` DECIMAL(10, 2) NOT NULL,
    `unitPrice` DECIMAL(14, 2) NOT NULL,
    `subtotal` DECIMAL(14, 2) NOT NULL,
    `status` ENUM('pending', 'in_progress', 'completed', 'canceled') NOT NULL DEFAULT 'pending',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `project_items_projectId_idx`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_payments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` INTEGER NOT NULL,
    `registeredByUserId` INTEGER NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL,
    `amount` DECIMAL(14, 2) NOT NULL,
    `percentageEquivalent` DECIMAL(5, 2) NOT NULL,
    `paymentMethod` ENUM('transfer', 'cash', 'card', 'paypal', 'bank_deposit', 'other') NOT NULL,
    `reference` VARCHAR(255) NULL,
    `notes` TEXT NULL,
    `receiptFilePath` VARCHAR(500) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `project_payments_projectId_idx`(`projectId`),
    INDEX `project_payments_registeredByUserId_idx`(`registeredByUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NULL,
    `quoteId` INTEGER NULL,
    `quoteAcceptanceId` INTEGER NULL,
    `projectId` INTEGER NULL,
    `documentType` ENUM('quote_pdf', 'acceptance_pdf', 'payment_receipt', 'contract', 'other') NOT NULL,
    `fileName` VARCHAR(255) NOT NULL,
    `filePath` VARCHAR(500) NULL,
    `mimeType` VARCHAR(100) NULL,
    `sizeInBytes` INTEGER NULL,
    `bucket` VARCHAR(100) NULL,
    `objectKey` VARCHAR(500) NULL,
    `uploadedByUserId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `documents_clientId_idx`(`clientId`),
    INDEX `documents_quoteId_idx`(`quoteId`),
    INDEX `documents_projectId_idx`(`projectId`),
    INDEX `documents_quoteAcceptanceId_idx`(`quoteAcceptanceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entityType` ENUM('quote', 'quote_item', 'project', 'project_item') NOT NULL,
    `entityId` INTEGER NOT NULL,
    `oldStatus` VARCHAR(50) NOT NULL,
    `newStatus` VARCHAR(50) NOT NULL,
    `changedByUserId` INTEGER NULL,
    `changedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `notes` TEXT NULL,

    INDEX `status_history_entityType_entityId_idx`(`entityType`, `entityId`),
    INDEX `status_history_changedByUserId_idx`(`changedByUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quotes` ADD CONSTRAINT `quotes_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quotes` ADD CONSTRAINT `quotes_createdByUserId_fkey` FOREIGN KEY (`createdByUserId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quote_items` ADD CONSTRAINT `quote_items_quoteId_fkey` FOREIGN KEY (`quoteId`) REFERENCES `quotes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quote_acceptances` ADD CONSTRAINT `quote_acceptances_quoteId_fkey` FOREIGN KEY (`quoteId`) REFERENCES `quotes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quote_acceptances` ADD CONSTRAINT `quote_acceptances_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quote_acceptance_items` ADD CONSTRAINT `quote_acceptance_items_quoteAcceptanceId_fkey` FOREIGN KEY (`quoteAcceptanceId`) REFERENCES `quote_acceptances`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quote_acceptance_items` ADD CONSTRAINT `quote_acceptance_items_quoteItemId_fkey` FOREIGN KEY (`quoteItemId`) REFERENCES `quote_items`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_quoteId_fkey` FOREIGN KEY (`quoteId`) REFERENCES `quotes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_quoteAcceptanceId_fkey` FOREIGN KEY (`quoteAcceptanceId`) REFERENCES `quote_acceptances`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_items` ADD CONSTRAINT `project_items_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_payments` ADD CONSTRAINT `project_payments_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_payments` ADD CONSTRAINT `project_payments_registeredByUserId_fkey` FOREIGN KEY (`registeredByUserId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_quoteId_fkey` FOREIGN KEY (`quoteId`) REFERENCES `quotes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_quoteAcceptanceId_fkey` FOREIGN KEY (`quoteAcceptanceId`) REFERENCES `quote_acceptances`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_uploadedByUserId_fkey` FOREIGN KEY (`uploadedByUserId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `status_history` ADD CONSTRAINT `status_history_changedByUserId_fkey` FOREIGN KEY (`changedByUserId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
