import { NextFunction, Request, Response } from "express";
import { createUserService, deleteUserService, findUserByIdService, getAllUserServies, updateUserService } from "../services/user.service";
import sendResponse from "../utils/ApiResponse/apiResponse";
import logger from "../config/logger.config";
import { getStatusCode, StatusCodes } from "http-status-codes";

export async function userRegistationHandler(req:Request,res:Response,next:NextFunction){
   try {
       logger.info("Creating user");
       const user = await createUserService(req.body);

       sendResponse(res,201,"succesfully Create User",user);

   } catch (error) {
       logger.error(error as Error);
        next(error)
   }

}


export async function getUserByIdHandler(req:Request,res:Response,next:NextFunction){
    try {
        logger.info(`Fetching user by id: ${req.params.id}`);
        const user = await findUserByIdService(Number(req.params.id));     
        sendResponse(res,200,"User Data ", user);

    } catch (error) {
        logger.error(error as Error);
        next(error)
    }
}

export async function getAllUserHandler(req:Request,res:Response,next:NextFunction){
    try {
        logger.info("Fetching all users");
        const user = await getAllUserServies();

        sendResponse(res,200,"all User Data ", user);
    } catch (error) {
        logger.error(error as Error);
        next(error);
    }
}

export async function deleteUserHandler(req:Request,res:Response,next:NextFunction){
    try {
        logger.info(`Deleting user by id: ${req.params.id}`);
        const user = await deleteUserService(Number(req.params.id));

        sendResponse(res,200,"user Data Deleted",user);
    } catch (error) {
        logger.error(error as Error);
        next(error);
    }
}

export async function updateUserHandler(req:Request,res:Response,next:NextFunction){
    try {
        logger.info(`Updating user by id: ${req.params.id}`);
        const user = await updateUserService({
            ...req.body,
            id: Number(req.params.id)
        });

        // sendResponse(res,,"user Data Updated",user);
        res.status(StatusCodes.UPGRADE_REQUIRED).json({
            message:"user Data Updated",
            data:user,
            success: true
        })
    } catch (error) {
        logger.error(error as Error);
        next(error);
    }
}