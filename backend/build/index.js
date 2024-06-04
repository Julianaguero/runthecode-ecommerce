"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const index_2 = __importDefault(require("./db/index"));
// import CustomError from "./error/CustomError";
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
dotenv_1.default.config();
const PORT = parseInt((process.env.PORT || '3005'), 10);
const app = (0, express_1.default)();
app.use(express_1.default.json());
//CORS config
const allowedOrigins = ["http://localhost:5174", "http://localhost:5173"];
const options = {
    credentials: true,
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
//routes handler
app.use("/api", index_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend/dist')));
//Port listen
app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`);
});
//mongodb conection 
index_2.default.connectToDatabase();
app.get('*', (_req, res) => res.sendFile(path_1.default.join(__dirname, '../../frontend/dist/index.html')));
//initial error handler // initial error middlewares
// app.all("*", (_req: Request, _res: Response, next: NextFunction) => {
//     const error = new CustomError("Endpoint not found", 404, "INVALID_URL")
//     next(error)
//   });
app.use(globalErrorHandler_1.default);
