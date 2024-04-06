import bcrypt from "bcryptjs";
import { Users } from "./models/users.model.js";
import connection from "./db/index.js";
import jwt from "jsonwebtoken"

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


export const getDataFromToken = (request) => {
    try{
        const token = request.cookies.get("token")?.value || "";

        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)

        //not coming from mongodb coming from tokenData that is why it is not _id.

        return decodedToken.id;

    }catch(error){
        throw new Error(error);
    }
}