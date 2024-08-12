import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import path from "path";

import router from "./routes/index";
import db from "./db/index";
import CustomError from "./error/CustomError";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import { seedRouter } from "./routes/seedRoutes";

dotenv.config();

const PORT: number = parseInt((process.env.PORT || '3005') as string, 10);
const app = express();
app.use(express.json());

// CORS config
const allowedOrigins = [
    "http://localhost:5174",
    "http://localhost:5173",
    "https://runthecode-ecommerce.onrender.com/"
];
const options: cors.CorsOptions = {
    credentials: true,
    origin: allowedOrigins
};
app.use(cors(options));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes handler
app.use("/api", router);
app.use("/api", seedRouter);

// Initial error handler for unknown API routes
app.all("/api/*", (_req: Request, _res: Response, next: NextFunction) => {
    const error = new CustomError("Endpoint not found", 404, "INVALID_URL");
    next(error);
});

// Global error handler
app.use(globalErrorHandler);

// Serving static files for SPA
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// Fallback for SPA - Serve index.html for any unknown route not starting with /api
app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

// MongoDB connection 
db.connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});