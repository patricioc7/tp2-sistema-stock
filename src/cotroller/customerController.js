import {
  addNewCustomerToDB,
  getAllCustomersFromDB,
  getCustomerByIdFromDb,
} from '../data/customerDao.js'

const getAllCustomers = async () => {
  return await getAllCustomersFromDB()
}

const addNewCustomer = async (customer) => {
  await addNewCustomerToDB(customer)
  return customer
}

const getCustomerById = async (id) => {
  return await getCustomerByIdFromDb(id)
}

export { getAllCustomers, addNewCustomer, getCustomerById }
