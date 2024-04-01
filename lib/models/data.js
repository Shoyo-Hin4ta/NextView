import connection from "../db/index.js";
import {Users} from "./users.model.js"
import { Product } from "./products.model.js";

const fetchUsers = async() => {
    try {
        connection()
        const users = await Users.find();
        return users
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch");
    }
}

export const fetchProducts = async() => {
    try{
        connection();
        const products = await Product.find();
        return products
    }catch(error){
        console.log(error);
        throw new Error('Failed to fetch');
    }
}

export default fetchUsers;