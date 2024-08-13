"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../error/CustomError"));
const globalErrorHandler = (error, _req, res, next) => {
    next();
    if (error instanceof CustomError_1.default) {
        // Custom error handling
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message,
            code: error.code || "UNKNOWN_ERROR",
        });
    }
    // General error handling
    res.status(500).json({
        status: "error",
        message: "Something went wrong on the server.",
    });
};
exports.default = globalErrorHandler;
