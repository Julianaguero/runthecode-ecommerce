import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import router from "./routes/index"
import CustomError from "./error/CustomError";
import GlobalErrorHandler from "./middlewares/globalErrorHandler";
import globalErrorHandler from "./middlewares/globalErrorHandler";

dotenv.config();

const PORT = process.env.PORT || 3005;
const app = express();
app.use(express.json());

//CORS config
const allowedOrigins = ["http://localhost:5173"]
const options: cors.CorsOptions = {
    credentials: true,
    origin: allowedOrigins
}
app.use(cors(options));

//routes handler
app.use("/api", router)

//error handler




//Port listen
app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})


//mongodb conection 
const MONGODB_URI: string = process.env.MONGODB_URI || "mongodb://localhost/runthecodedb";
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("connected to mongodb");
    })
    .catch(() => {
        console.log("connection error with mongodb")
    })




//initial error handler // initial error middlewares

app.all("*", (_req: Request, res: Response, next: NextFunction) => {
    const error = new CustomError("Unknown URL", 404, "INVALID_URL")
  
    next(error)
  });


app.use(globalErrorHandler);


