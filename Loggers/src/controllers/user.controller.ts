import { NextFunction, Request, Response } from "express";
import { CreateUserDTO } from "../dto/user.dto";
import { createUserService, getUserByIdService } from "../services/user.service";
import { success } from "zod";

export async function createUserHandler(req:Request,res:Response,next:NextFunction){

    try {

        
        const user = await createUserService(req.body);

        res.status(201).json({
            message:"User has been Created",
            data:user,
            success:true
        });

        
    } catch (error) {
        next(error)
    }
}

export async function  getUserByIdHandler(req:Request,res:Response,next:NextFunction) {

    try {
        const user = await getUserByIdService(Number(req.params.id));

        res.status(200).json({

            message:"user has been fetch",

            data:user,

            success:true

        })
        
    } catch (error) {
        next(error)
    }
    
}