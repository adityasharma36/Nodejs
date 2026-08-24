import { NextFunction, Request, Response } from "express";
import fs from 'fs/promises'
import { InternalServerError, NotFoundError } from "../utils/errors/app.error";

export const getData = async (req:Request,res:Response,next:NextFunction)  => {

    const {name} = req.body;

    // this is synchronsic error handling 
    // throw new Error("Ping Controller Error")


    // Asynchrono way to Error Handling


    // fs.readFile("hello",(error,data)=>{
    //     if(error){
    //         console.log(error);
    //        return next(error);
    //     }
    //     console.log(data);

    // res.status(200).json({
    //     message:'user Details',
    //     success:true,
    //     name
    // })
    // })

    

    // modern Way to handler error
    try {
        await fs.readFile('hello');
        
        console.log('hello World')
        
    } catch (error) {

        // throw new InternalServerError("Something went Wrong <<<");
        throw new NotFoundError("user not found")
        
    }


}