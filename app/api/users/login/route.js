import connection from "@/lib/db";
import { Users } from "@/lib/models/users.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connection()

export async function POST(request){
    try {
        const reqBody = await request.json();
        const {username, password} = reqBody;
        // console.log(reqBody);

        const user = await Users.findOne({username})
        if(!user){
            return NextResponse.json({error: "User does not exist"},{status : 404})
        }

        const match = await bcrypt.compare(password, user.password);

        if(!match) {
            return NextResponse.json({
                error: "check your credentials",
                success:true
            }, {status: 401})
        }

        const tokenData = {
            id: user._id,
            username : user.username
        }

        const token =  jwt.sign(tokenData, process.env.TOKEN_SECRET, {
            expiresIn : '1d'
        })

        const response =  NextResponse.json({message : "User found"});

        response.cookies.set("token", token, {
            httpOnly : true,
        })

        return response;

    } catch (error) {
        return NextResponse.json({error: error},{status : 500})
    }
}