import type { NextFunction, Request, Response } from "express";
import {v4 as uuidV4} from 'uuid'
import { asynclocalStorage } from "../utils/helper/corelation.helper.ts";
import logger from "../config/loggerConfig.ts";

export const corelationMiddleware = (req:Request,res:Response,next:NextFunction) => {
        const corealtiondId = uuidV4();
        req.headers['x-corelation-Id']= corealtiondId;
        asynclocalStorage.run({corelation:corealtiondId},()=>{

       logger.info(`Incoming request: ${req.method} ${req.originalUrl}`);
       res.on("finish", () => {
            logger.info(`Request completed: ${req.method} ${req.originalUrl} ${res.statusCode}`);
        });
        next();

        })
}