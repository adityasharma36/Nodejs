
import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/ping.error";


export const genericError = (error:AppError,req:Request,res:Response,next:NextFunction) => {
    
    res.status(error.statusCode).json({
        error
    })
} 