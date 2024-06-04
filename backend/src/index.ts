import express, {  Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import path from "path";

import router from "./routes/index"
import db from "./db/index"
// import CustomError from "./error/CustomError";
import globalErrorHandler from "./middlewares/globalErrorHandler";

dotenv.config();

const PORT: number = parseInt((process.env.PORT || '3005') as string, 10);
const app = express();
app.use(express.json());

//CORS config
const allowedOrigins = ["http://localhost:5174", "http://localhost:5173"]
const options: cors.CorsOptions = {
    credentials: true,
    origin: allowedOrigins
}
app.use(cors(options));

//routes handler
app.use("/api", router)


app.use(express.static(path.join(__dirname, '../../frontend/dist')))

//Port listen
app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})

//mongodb conection 
db.connectToDatabase()
app.get('*', (_req: Request, res: Response) => 
   res.sendFile(path.join(__dirname, '../../frontend/dist/index.html')) 
)

//initial error handler // initial error middlewares

// app.all("*", (_req: Request, _res: Response, next: NextFunction) => {
//     const error = new CustomError("Endpoint not found", 404, "INVALID_URL")
  
//     next(error)
//   });


app.use(globalErrorHandler);


