import { addNewStoreToDB, getAllStoresFromDB, getStoreByIdFromDb, updateStoreOnDB, deleteStoreByIdFromDb } from '../data/storeDao.js'

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

const deleteStoreById = async (id) => {
  return await deleteStoreByIdFromDb(id)
}

export { getAllStores, addNewStore, updateStore, getStoreById , deleteStoreById}
