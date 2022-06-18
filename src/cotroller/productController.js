import { addNewProductToDB, getAllProductsFromDB, updateProductOnDB } from "../data/productDao.js";

const getAllProducts = async () => {
    return await getAllProductsFromDB()
}

const addNewProduct = async (product) => {
    return await addNewProductToDB(product)
}

const updateProduct = async (product) => {
    return await updateProductOnDB(product)
}

export { getAllProducts, addNewProduct, updateProduct }