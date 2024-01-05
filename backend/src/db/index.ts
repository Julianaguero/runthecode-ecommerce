import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const MONGODB_URI: string = process.env.MONGODB_URI || "mongodb://localhost/runthecodedb"

const connectToDatabase = async() => {
    try {
        await mongoose.connect(MONGODB_URI, { autoIndex: false });
        console.log("connected to mongodb")

    } catch (error) {
        console.log("connection error with mongodb")
    }
}

export default { connectToDatabase }

