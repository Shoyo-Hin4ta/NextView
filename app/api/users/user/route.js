import connection from "@/lib/db/index";
import { Users } from "@/lib/models/users.model";
import { NextResponse } from "next/server";

import { getDataFromToken } from "@/lib/helper";



export async function GET(request){
    connection()
    const userID = await getDataFromToken(request);
    const user = await Users.findOne({_id : userID}).select("-password");

    return NextResponse.json({
        message : "User found",
        data : user
    })
}