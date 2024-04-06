import connection from "@/lib/db/index";
import { Users } from "@/lib/models/users.model";
import { NextResponse } from "next/server";

import { getDataFromToken } from "@/lib/helper";

connection()

export async function POST(request){
    const userID = await getDataFromToken(request);
    const user = await Users.findOne({_id : userID}).select("-password");

    //check if there is no user

    return NextResponse.json({
        message : "User found",
        data : user
    })
}