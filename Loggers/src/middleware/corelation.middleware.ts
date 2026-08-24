
import { NextFunction, Request, Response } from 'express'
import {v4 as uuidV4} from 'uuid'
import { asyncLocalstorage } from '../utils/helper/request.helper';

export const corelationIdMiddleware = (req :Request,res:Response , next:NextFunction) => {

    const corelationdId = uuidV4();

    req.headers['x-corealtion-Id']= corelationdId;

    asyncLocalstorage.run({corelationId:corelationdId},()=> {

        next();

    })
    
}