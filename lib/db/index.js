import mongoose from "mongoose";


const connection = async() => {

    const connection = {}

    try {
        if(connection.isConnected) return;
        const db = await mongoose.connect('mongodb+srv://ritik224:IF5wzBzXzQrvrGNf@cluster0.thmuygd.mongodb.net/NextView');
        connection.isConnected = db.connection.readyState;

    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}

export default connection;