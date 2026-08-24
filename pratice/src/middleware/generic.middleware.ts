import type { NextFunction, Request, Response } from "express";
import {StatusCodes} from 'http-status-codes'
import type { AppError } from "../utils/errors/users.errors.ts";

export const genericError = (error:AppError,req:Request,res:Response,next:NextFunction) => {

    res.status(error.statusCode).json({
        error
    })

}