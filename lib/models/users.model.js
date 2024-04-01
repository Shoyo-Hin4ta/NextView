import mongoose, {Schema} from "mongoose";


const userSchema = new Schema({
    username : {
        required : true,
        type : String,
        unique : true,
        max  : 20
    },
    email : {
        required : true,
        type : String,
        unique : true
    },
    password:{
        required : true,
        type : String
    },
    img:{
        type: String,
    },
    isAdmin : {
        type:Boolean,
        default : false
    },
    phonenumber:{
        type :String
    },
    address: {
        type : String
    },
    isActive :{
        type: Boolean,
        default : true
    }
}, {timestamps: true})


export const Users =  mongoose.models.Users || mongoose.model("Users", userSchema);