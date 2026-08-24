
import { NextFunction, Request, Response } from 'express'
import {v4 as uuidV4} from 'uuid'
import { asyncLocalStorage } from '../utils/helper/request.header';
import logger from '../config/logger.config';

export const corelationIdMiddleware = (req:Request,res:Response,next:NextFunction) => {

    const corelationId = uuidV4();

    req.headers['x-corelation-id'] = corelationId;

    asyncLocalStorage.run({corelation:corelationId},()=>{
        logger.info(`Incoming request: ${req.method} ${req.originalUrl}`);
        res.on("finish", () => {
            logger.info(`Request completed: ${req.method} ${req.originalUrl} ${res.statusCode}`);
        });
        next();
    })

}