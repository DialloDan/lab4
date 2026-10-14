import { response, Response } from 'express';

declare global {
  namespace Express {
    export interface Response {
      customSuccess(httpStatusCode: number, message: string, data?: any): Response;
    }
  }
}

response.customSuccess = function (httpStatusCode: number, message: string, data: any = null): Response {
  return this.status(httpStatusCode).json({ message, data });
};
