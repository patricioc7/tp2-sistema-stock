import { getProductByIdFromDb } from '../../data/productDao.js'
import { getStoreByIdFromDb } from '../../data/storeDao.js'
import { getCustomerByIdFromDb } from '../../data/customerDao.js'

const doesProductExist = (productId) => {
  return getProductByIdFromDb(productId) !== undefined
}

const doesStoreExist = (storeId) => {
  return getStoreByIdFromDb(storeId) !== undefined
}

const doesCustomerExist = (customerId) => {
  return getCustomerByIdFromDb(customerId) !== undefined
}

export { doesProductExist, doesStoreExist, doesCustomerExist }
