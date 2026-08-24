import { Request, Response } from "express"
import fs from 'fs/promises'
import { NotFoundError } from "../utils/Errors/app.error";
import logger from "../config/logger.config";

export const getData = async (req:Request,res:Response) => {
    const {data} = req.body;
    try {
        logger.info("Hello World")
        await fs.readFile('hello')
        console.log(data);
    } catch (error) {
        throw new NotFoundError("NotFoundError")
    }
}