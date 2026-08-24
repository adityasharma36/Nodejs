import { NextFunction, Request, Response } from "express";

import { ZodObject } from "zod";
import { InternalServerError } from "../utils/error/crud.error";
import logger from "../config/logger.config";

export const BodyValidation = (schema:ZodObject) => {

    return async (req:Request, res:Response, next:NextFunction) => {

        try {
            logger.info(`process now on bodoyValidation ${req.body}`)
            await schema.parseAsync(req.body);

            next();

        } catch (error) {

            throw new InternalServerError("crudValidation Invalid")

        }

    }

}