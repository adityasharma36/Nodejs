import { NextFunction, Request, Response } from "express";

import { AppError } from "../utils/errors/app.error";


export const genericErrorHandlere = (error:AppError,req:Request,res:Response,next:NextFunction) =>{

    res.status(500).json({
        success:false,
        error
    })
}