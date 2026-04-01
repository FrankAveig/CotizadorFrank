const toNumber = (val) => {
  if (val === null || val === undefined) return 0;
  return parseFloat(val.toString());
};

const round2 = (num) => Math.round(num * 100) / 100;

const calculateItemSubtotal = (quantity, unitPrice) => {
  return round2(toNumber(quantity) * toNumber(unitPrice));
};

const calculateQuoteTotals = (items, discountAmount = 0, taxRate = 0) => {
  const subtotal = items.reduce((sum, item) => {
    return round2(sum + calculateItemSubtotal(item.quantity, item.unitPrice));
  }, 0);

  const discount = toNumber(discountAmount);
  const rate = toNumber(taxRate);
  const taxableAmount = Math.max(subtotal - discount, 0);
  const taxAmount = round2((taxableAmount * rate) / 100);
  const totalAmount = round2(taxableAmount + taxAmount);

  return {
    subtotal,
    discountAmount: discount,
    taxRate: rate,
    taxAmount,
    totalAmount: Math.max(totalAmount, 0),
  };
};

const calculatePaymentPercentage = (paymentAmount, totalAmount) => {
  const total = toNumber(totalAmount);
  if (total === 0) return 0;
  return round2((toNumber(paymentAmount) / total) * 100);
};

const recalculateProjectFinancials = (totalAmount, payments) => {
  const total = toNumber(totalAmount);
  const paidAmount = payments.reduce((sum, p) => round2(sum + toNumber(p.amount)), 0);
  const pendingAmount = Math.max(round2(total - paidAmount), 0);
  const paidPercentage = total === 0 ? 0 : Math.min(round2((paidAmount / total) * 100), 100);
  const isFullyPaid = pendingAmount <= 0;

  return { paidAmount, pendingAmount, paidPercentage, isFullyPaid };
};

const calculateAcceptedTotal = (acceptedItems, taxRate = 0) => {
  const subtotal = acceptedItems.reduce((sum, item) => {
    return round2(sum + calculateItemSubtotal(item.quantity, item.unitPrice));
  }, 0);
  const rate = toNumber(taxRate);
  const taxAmount = round2((subtotal * rate) / 100);
  return { subtotal, taxAmount, total: round2(subtotal + taxAmount) };
};

module.exports = {
  toNumber,
  round2,
  calculateItemSubtotal,
  calculateQuoteTotals,
  calculatePaymentPercentage,
  recalculateProjectFinancials,
  calculateAcceptedTotal,
};
