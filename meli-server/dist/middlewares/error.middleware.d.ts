import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/http.exceptions';
declare const errorMiddleware: (error: HttpException, req: Request, res: Response, next: NextFunction) => void;
export default errorMiddleware;
