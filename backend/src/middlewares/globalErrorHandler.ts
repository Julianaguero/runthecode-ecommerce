import {  NextFunction, Request, Response } from 'express';
import CustomError from '../error/CustomError';

const globalErrorHandler = (error: CustomError | Error, _req: Request, res: Response, next: NextFunction) => {
  next();
  if (error instanceof CustomError) {
     // Custom error handling
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
      code: error.code || "UNKNOWN_ERROR",
    })
  }
   // General error handling
  res.status(500).json({
    status: "error",
    message: "Something went wrong on the server.",
  });
};

export default globalErrorHandler;