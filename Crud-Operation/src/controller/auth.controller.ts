import { Request, Response } from "express";

import { UnAuthorisiedError } from "../utils/error/crud.error";

import sendResponse from "../utils/ApiResponse/apiResponse";
import logger from "../config/logger.config";

export const authLogin =  async (req:Request,res:Response) => {

    try {
        
        const data = req.body;

        console.log(req);

        logger.info("inside authLogin")

        sendResponse(res,200,"userfetch complete",data)

        

    } catch (error) {

        throw new UnAuthorisiedError("authLogin Error ");
    
    }

}