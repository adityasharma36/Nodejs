import { NextFunction, Request, Response } from "express";
// import { success } from "zod";
import { ZodObject } from "zod";


export const validateRequestBody = (schema:ZodObject) => {
    return async(req:Request,res:Response,next:NextFunction) =>{

        try {
            console.log("it hit the serve")
            await schema.parseAsync(req.body);

            console.log('Request body is Valid');
            next();
            
        } catch (error) {
            res.status(400).json({
                message:"Invalid Schema",
                success:false,
                error:error
            })
        }
    }
}