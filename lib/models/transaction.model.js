import mongoose, {Schema} from "mongoose";


const tranSchema = new Schema({
    name : {
        required : true,
        type : String,
        max  : 20
    },
    date :{
        type: String
    },
    about:{
        type: String
    },
    status:{
        type: String
    },
    img:{
        type: String
    },
    userId:{
        type : Schema.Types.ObjectId,
        ref : 'Users'
    }
}, {timestamps: true})


export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", tranSchema);