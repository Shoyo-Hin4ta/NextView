import bcrypt from "bcryptjs";
import { Users } from "./models/users.model.js";
import connection from "./db/index.js";
import jwt from "jsonwebtoken"
import { cookies } from 'next/headers'

export const matcher = async(passedPass, userPass) => {
    const match = await bcrypt.compare(passedPass, userPass);

    if(match){
        return true
    }

    else return false
}



export const getUser = async(passedUsername) => {
    connection();
    const user = await Users.findOne({username : passedUsername});
    return user;
}


export const getDataFromToken = async(request) => {
    try{
        // console.log(request);
        const token = request.cookies?.get("token")?.value || "";

        if(!token) return;
        
        const decodedToken = await jwt.verify(token, process.env.TOKEN_SECRET)

        //not coming from mongodb coming from tokenData that is why it is not _id.

        return decodedToken.id;

    }catch(error){
        throw new Error(error);
    }
}


export const getSession = () => {
    const cookieStore = cookies()
    const hasCookie = cookieStore.get('token')
    
    const decodedToken =  jwt.verify(hasCookie.value, process.env.TOKEN_SECRET)
    // console.log(decodedToken)
    return decodedToken.id;
}