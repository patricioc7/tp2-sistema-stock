class HistoryLog {
  constructor (type, productId, stockId, qty, storeId, customerId) {
    this.type = type
    this.productId = productId
    this.qty = qty
    this.storeId = storeId
    this.customerId = customerId
  }
}

export { HistoryLog }
