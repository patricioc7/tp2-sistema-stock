class HistoryLog {
  constructor (date, type, stockId, qty, storeId, customerId) {
    this.type = type
    this.qty = qty
    this.storeId = storeId
    this.customerId = customerId
    this.date = date
  }
}

export { HistoryLog }
