import { addNewProductToDB, getAllProductsFromDB, getProductByIdFromDb, deleteProductByIdFromDb } from '../data/productDao.js'

const getAllProducts = async () => {
  return await getAllProductsFromDB()
}

const addNewProduct = async (product) => {
  await addNewProductToDB(product)
  return product
}

const getProductById = async (id) => {
  return await getProductByIdFromDb(id)
}

const deleteProductById = async (id) => {
  return await deleteProductByIdFromDb(id)
}

export { getAllProducts, addNewProduct, getProductById, deleteProductById}
