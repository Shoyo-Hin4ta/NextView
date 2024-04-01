import mongoose, {Schema} from "mongoose";


const productSchema = new Schema({
    productName : {
        required : true,
        type : String,
        max  : 20
    },
    category : {
        required : true,
        type : String,
    },
    price:{
        type: Number,
    },
    stock : {
        type: Number,
    },
    size:{
        type :String
    },
    color: {
        type : String
    },
    productDesc :{
        type: String
    },
    img:{
        type: String
    }
}, {timestamps: true})


export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);