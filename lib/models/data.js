import connection from "../db/index.js";
import {Users} from "./users.model.js"
import { Product } from "./products.model.js";
import { Transaction } from "./transaction.model.js";

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

export const fetchUser = async(id) => {
    try{
        connection();
        const user = await Users.findById(id);
        console.log(user);
        return user;
    }
    catch(err){
        console.log(err);
    }
}

export const fetchProduct = async(id) => {
    try{
        connection();
        const product = await Product.findById(id);
        console.log(product);
        return product;
    }
    catch(err){
        console.log(err);
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


export const fetchTransactions = async(userId) => {
    try {
        connection();
        const transactions = await Transaction.find({userId : userId});
        // console.log(transactions);
        return transactions
    } catch (error) {
        
    }
}

export default fetchUsers;
