"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../error/CustomError"));
const globalErrorHandler = (error, _req, res) => {
    if (error instanceof CustomError_1.default) {
        return res.status(error.statusCode).json({
            code: error.code,
            message: error.message,
        });
    }
    return res.status(500).json({ error: 'Something went wrong!' });
};
exports.default = globalErrorHandler;
