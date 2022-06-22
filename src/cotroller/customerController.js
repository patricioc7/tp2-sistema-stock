import { addNewCustomerToDB, getAllCustomersFromDB, updateCustomerOnDB } from '../data/customerDao.js'

const getAllCustomers = async () => {
  return await getAllCustomersFromDB()
}

const addNewCustomer = async (product) => {
  return await addNewCustomerToDB(product)
}

const updateCustomer = async (product) => {
  return await updateCustomerOnDB(product)
}

export { getAllCustomers, addNewCustomer, updateCustomer }
