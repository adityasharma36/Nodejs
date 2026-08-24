import type { Request, Response } from "express";
import logger from "../config/loggerConfig.ts";
import { InternalError } from "../utils/errors/users.errors.ts";


export const getData = async (req:Request,res:Response) => {

    try {
        console.log('currently here')
        const {name} = req.body;

        logger.info('hello World this is me')

        res.status(201).json({

        name,

    })
        
    } catch (error) {

     throw new InternalError("Internal Error")
        
    }
}