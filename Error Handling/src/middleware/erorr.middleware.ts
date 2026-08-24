import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/Errors/app.error";


export const genericHandlerError = (error:AppError,req:Request,res:Response,next:NextFunction) => {
    console.log(error);
    res.status(error.statusCode).json({
        error
    })
}