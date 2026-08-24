import { NextFunction, Request, Response } from "express";
import { ZodObject , parseAsync } from "zod";
import { BadRequestEror } from "../utils/errors/ping.error";



export const bodyValidate = (schema:ZodObject) => {

    return async (req:Request,res:Response,next:NextFunction ) => {


        try {

            await schema.parseAsync(req.body);

            next();

        } catch (error) {

            throw new BadRequestEror("validate Error");

            
        }

    }

}