import { Request, Response } from "express";
import { NotFoundError } from "../utils/errors/ping.error";
import logger from "../config/logger.config";


export const pingMessage = (req:Request,res:Response) => {

    try {

    const {data}= req.body;

    logger.info(data);

    res.status(200).json({

        data

    })
        
    } catch (error) {

        throw new NotFoundError("pingMesage Contoller Error ")

    }
}