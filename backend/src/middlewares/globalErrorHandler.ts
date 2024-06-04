import {  Request, Response } from 'express';
import CustomError from '../error/CustomError';

const globalErrorHandler = (error: Error, _req: Request, res: Response) => {
  if (error instanceof CustomError) {

    return res.status(error.statusCode).json({
      code: error.code,
      message: error.message,
    })
  }

  return res.status(500).json({ error: 'Something went wrong!' });
};

export default globalErrorHandler;