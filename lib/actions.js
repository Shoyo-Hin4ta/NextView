import { Users } from "./models/users.model.js"
import connection from "./db/index.js"
import bcrypt from 'bcrypt'
import { redirect } from "next/navigation"
import { Product } from "./models/products.model.js"

export const addUser = async(formData) => {
    'use server'
    const {username, email, password, phonenumber, isAdmin, isActive, address } = Object.fromEntries(formData);
    console.log(Object.fromEntries(formData))

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




