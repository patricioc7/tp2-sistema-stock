import { getConnection } from "./connection.js";
import {ObjectId} from "mongodb";

const DATABASE = 'ort';
const PRODUCT = 'product';

const getAllProductsFromDB = async () => {
    const conn = await getConnection();
    return await conn.db(DATABASE)
        .collection(PRODUCT)
        .find({})
        .toArray()
}

const addNewProductToDB = async (product) => {
    const conn = await getConnection();
    return await conn.db(DATABASE)
        .collection(PRODUCT)
        .insertOne(product);
}

const updateProductOnDB = async (product) => {
    const conn = await getConnection();
    return await conn.db(DATABASE)
        .collection(PRODUCT)
        .updateOne({_id : new ObjectId(product._id)}, product);
}

export { getAllProductsFromDB, addNewProductToDB, updateProductOnDB }