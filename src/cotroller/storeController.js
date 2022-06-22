import { addNewStoreToDB, getAllStoresFromDB, getStoreByIdFromDb, updateStoreOnDB } from '../data/storeDao.js'

const getAllStores = async () => {
  return await getAllStoresFromDB()
}

const addNewStore = async (store) => {
  return await addNewStoreToDB(store)
}

const updateStore = async (store) => {
  return await updateStoreOnDB(store)
}

const getStoreById = async (store) => {
  return await getStoreByIdFromDb(store)
}

export { getAllStores, addNewStore, updateStore, getStoreById }
