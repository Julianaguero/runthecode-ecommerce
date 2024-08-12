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
const CustomError_1 = __importDefault(require("./error/CustomError"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const seedRoutes_1 = require("./routes/seedRoutes");
dotenv_1.default.config();
const PORT = parseInt((process.env.PORT || '3005'), 10);
const app = (0, express_1.default)();
app.use(express_1.default.json());

// CORS config
const allowedOrigins = [
    "http://localhost:5174",
    "http://localhost:5173",
    "https://runthecode-ecommerce.onrender.com/"
];

const options = {
    credentials: true,
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));

// API Routes handler
app.use("/api", index_1.default);
app.use("/api", seedRoutes_1.seedRouter);
// Initial error handler for unknown API routes
app.all("/api/*", (_req, _res, next) => {

    const error = new CustomError_1.default("Endpoint not found", 404, "INVALID_URL");
    next(error);
});
// Global error handler
app.use(globalErrorHandler_1.default);

// Serving static files for SPA
app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend/dist')));
// Fallback for SPA - Serve index.html for any unknown route not starting with /api
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../frontend/dist/index.html'));
});
// MongoDB connection 
index_2.default.connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});
