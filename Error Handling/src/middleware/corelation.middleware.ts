
import { NextFunction, Request, Response } from 'express'
import {v4 as uuidV4} from 'uuid'
import { asyncLocalStorage } from '../utils/helper/request.header';


export const corelationIdMiddleWare = (req : Request,res:Response,next:NextFunction) => {


    const corelationId = uuidV4();

        // old way but there is problem in it 

    req.headers['x-corellation-Id']= corelationId;
    // next();


    asyncLocalStorage.run({corelationId:corelationId},() => {

        next();
        
    })

}