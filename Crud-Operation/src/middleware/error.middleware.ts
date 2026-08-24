import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/error/crud.error";
import logger from "../config/logger.config";


export const genericError= (error:AppError,req:Request,res:Response,next:NextFunction) => {
    logger.error("Request failed", {
        method: req.method,
        path: req.originalUrl,
        statusCode: error.statusCode,
        errorName: error.name,
        message: error.message,
        stack: error.stack
    });

    res.status(error.statusCode).json({
        error
    })
}