import type { NextFunction, Request, Response } from "express";
import type { ZodObject } from "zod";

export const bodyValidator = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log("Validator");

    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  };
};