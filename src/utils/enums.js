const QUOTE_STATUSES = {
  DRAFT: 'draft',
  ISSUED: 'issued',
  SENT: 'sent',
  VIEWED: 'viewed',
  PARTIALLY_ACCEPTED: 'partially_accepted',
  FULLY_ACCEPTED: 'fully_accepted',
  REJECTED: 'rejected',
  EXPIRED: 'expired',
  CANCELED: 'canceled',
};

const QUOTE_ITEM_STATUSES = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
};

const ACCEPTANCE_TYPES = {
  FULL: 'full',
  PARTIAL: 'partial',
};

const PROJECT_STATUSES = {
  PENDING_START: 'pending_start',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELED: 'canceled',
};

const PROJECT_ITEM_STATUSES = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELED: 'canceled',
};

const PAYMENT_METHODS = {
  TRANSFER: 'transfer',
  CASH: 'cash',
  CARD: 'card',
  PAYPAL: 'paypal',
  BANK_DEPOSIT: 'bank_deposit',
  OTHER: 'other',
};

const DOCUMENT_TYPES = {
  QUOTE_PDF: 'quote_pdf',
  ACCEPTANCE_PDF: 'acceptance_pdf',
  PAYMENT_RECEIPT: 'payment_receipt',
  INVOICE_PDF: 'invoice_pdf',
  CONTRACT: 'contract',
  OTHER: 'other',
};

const ENTITY_TYPES = {
  QUOTE: 'quote',
  QUOTE_ITEM: 'quote_item',
  PROJECT: 'project',
  PROJECT_ITEM: 'project_item',
};

const USER_ROLES = {
  ADMIN: 'admin',
  SALES: 'sales',
  FINANCE: 'finance',
};

// Estados desde los cuales se puede aceptar una cotización
const ACCEPTABLE_QUOTE_STATUSES = [
  QUOTE_STATUSES.ISSUED,
  QUOTE_STATUSES.SENT,
  QUOTE_STATUSES.VIEWED,
];

// Transiciones de estado válidas para proyectos
const VALID_PROJECT_TRANSITIONS = {
  [PROJECT_STATUSES.PENDING_START]: [PROJECT_STATUSES.IN_PROGRESS, PROJECT_STATUSES.CANCELED],
  [PROJECT_STATUSES.IN_PROGRESS]: [PROJECT_STATUSES.COMPLETED, PROJECT_STATUSES.CANCELED],
  [PROJECT_STATUSES.COMPLETED]: [],
  [PROJECT_STATUSES.CANCELED]: [],
};

// Transiciones de estado válidas para ítems del proyecto (línea de trabajo por ítem)
const VALID_PROJECT_ITEM_TRANSITIONS = {
  [PROJECT_ITEM_STATUSES.PENDING]: [
    PROJECT_ITEM_STATUSES.IN_PROGRESS,
    PROJECT_ITEM_STATUSES.CANCELED,
  ],
  [PROJECT_ITEM_STATUSES.IN_PROGRESS]: [
    PROJECT_ITEM_STATUSES.COMPLETED,
    PROJECT_ITEM_STATUSES.CANCELED,
    PROJECT_ITEM_STATUSES.PENDING,
  ],
  [PROJECT_ITEM_STATUSES.COMPLETED]: [
    PROJECT_ITEM_STATUSES.IN_PROGRESS,
    PROJECT_ITEM_STATUSES.CANCELED,
  ],
  [PROJECT_ITEM_STATUSES.CANCELED]: [PROJECT_ITEM_STATUSES.PENDING],
};

module.exports = {
  QUOTE_STATUSES,
  QUOTE_ITEM_STATUSES,
  ACCEPTANCE_TYPES,
  PROJECT_STATUSES,
  PROJECT_ITEM_STATUSES,
  PAYMENT_METHODS,
  DOCUMENT_TYPES,
  ENTITY_TYPES,
  USER_ROLES,
  ACCEPTABLE_QUOTE_STATUSES,
  VALID_PROJECT_TRANSITIONS,
  VALID_PROJECT_ITEM_TRANSITIONS,
};
