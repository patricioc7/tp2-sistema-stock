import {
  addNewCustomerToDB,
  getAllCustomersFromDB,
  getCustomerByIdFromDb,
  deleteCustomerByIdFromDb,
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

const deleteCustomerById = async (id) => {
  return await deleteCustomerByIdFromDb(id)
}

export { getAllCustomers, addNewCustomer, getCustomerById, deleteCustomerById }
