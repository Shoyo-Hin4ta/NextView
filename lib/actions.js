'use server'

import { Users } from "./models/users.model.js"
import connection from "./db/index.js"
import bcrypt from 'bcryptjs'
import { redirect } from "next/navigation"
import { Product } from "./models/products.model.js"
import { revalidatePath } from "next/cache"
import { Transaction } from "./models/transaction.model.js"

export const addUser = async(formData) => {
    'use server'
    const {username, email, password, phonenumber, isAdmin, isActive, address } = Object.fromEntries(formData);

    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(password, salt);
    try {
        connection();
        const newUser = await Users({
            username, email, "password": hashedPass, phonenumber, isAdmin, isActive, address
        });

        await newUser.save();
    } catch (error) {
        console.log(error);
    }
    redirect("/dashboard/users")
}

export const addProduct = async(formData) => {
    'use server'

    const { productname, category, price, stock, size, color, productdesc } = Object.fromEntries(formData);
    try{
        connection();
        const newProduct = await Product({
            productName:productname, category, price, stock, size, color, productDesc: productdesc
        })

        await newProduct.save();
    }catch(error){
        throw new Error(error);
    }

    redirect("/dashboard/products");
}


export const deleteUser = async(formData) => {
    'use server'
    const {id} = Object.fromEntries(formData);
    try {
        connection();
        await Users.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
    revalidatePath('/dashboard/users');
}

export const deleteProduct = async(formData) => {
    'use server'
    const {id} = Object.fromEntries(formData);
    try {
        connection();
        await Product.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
    revalidatePath('/dashboard/products');
}


export const updateUser = async(formData) => {
    'use server'
    const {username, email, password, phonenumber, isAdmin, isActive, address } = Object.fromEntries(formData);

    try {
        connection();

        const updateFields = {
            username, email, password, phonenumber, isAdmin, isActive, address
        }
        const objToBeUpdated = Object.entries(updateFields).reduce((acc, [key ,value]) => {
            if (value !== ""){
                acc['key'] = value;
            }
            return acc;
        } , {})

        await Users.findByIdAndUpdate(id, objToBeUpdated);

    } catch (error) {
        
    }
};

export const updateProducts = async(formData) => {
    'use server'
    const { productname, category, price, stock, size, color, productdesc } = Object.fromEntries(formData);

    try {
        connection();

        const updateFields = {
            productName :productname, category, price, stock, size, color,productDesc: productdesc
        }
        
        const objToBeUpdated = Object.entries(updateFields).reduce((acc, [key ,value]) => {
            if (value !== ""){
                acc.key = value;
            }
            return acc;
        } , {})

        await Product.findByIdAndUpdate(id, objToBeUpdated);

    } catch (error) {
        console.log(error);
    }
};



export const addTransaction = async(formData) => {
    'use server'
    
    const { name, status, about, userId } = Object.fromEntries(formData);
    console.log(name, status, about, userId);
   try{
        connection();
        const newTransaction = await Transaction({
            name, status, about, userId
        })

        await newTransaction.save();
    }catch(error){
        throw new Error(error);
    }

    redirect("/dashboard/transactions");
}

export const updateStatus = async(e, transaction) => {
    'use server'
    try {
        connection();
      
        const updatedStatus = {
          status : e
        }
      
        await Transaction.findByIdAndUpdate(transaction._id, updatedStatus);
      
        revalidatePath('/dashboard/transactions');
    } catch (error) {
        throw new Error(error);
    }
}