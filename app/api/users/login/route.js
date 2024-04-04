import connection from "@/lib/db";
import { Users } from "@/lib/models/users.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

connection()

export async function POST(request){
    try {
        const reqBody = request.json();
        const {username, password} = reqBody;
        console.log(reqBody);

        const user = await Users.findOne({username})
        if(!user){
            return NextResponse.json({error: "User does not exist"},{status : 404})
        }

        const match = await bcrypt.compare(password, user.password);

        if(!match) {
            return NextResponse.json({
                error: "check your credentials",
                success:true
            })
        }

    } catch (error) {
        return NextResponse.json({error: error},{status : 500})
    }
}