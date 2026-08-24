


import { ZodObject } from "zod";

import { NextFunction, Request, Response } from "express";

// import 

export const validateRequestBody = (schema:ZodObject) => {
    return async (req:Request,res:Response,next:NextFunction) => {
        
        try {
            await schema.parseAsync(req.body);

            next();

        } catch (error) {
            throw new Error("Validate Error")
        }
    }
}