import { addNewStoreToDB, getAllStoresFromDB, getStoreByIdFromDb, updateStoreOnDB } from '../data/storeDao.js'

const getAllStores = async () => {
  return await getAllStoresFromDB()
}

const addNewStore = async (store) => {
  await addNewStoreToDB(store)
  return store
}

const updateStore = async (store) => {
  await updateStoreOnDB(store)
  return store
}

const getStoreById = async (store) => {
  return await getStoreByIdFromDb(store)
}

export { getAllStores, addNewStore, updateStore, getStoreById }
