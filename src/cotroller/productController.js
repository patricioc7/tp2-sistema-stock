import { addNewProductToDB, getAllProductsFromDB, getProductByIdFromDb } from '../data/productDao.js'

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

export { getAllProducts, addNewProduct, getProductById }
