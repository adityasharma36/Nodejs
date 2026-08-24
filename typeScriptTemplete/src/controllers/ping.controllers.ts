import { Request, Response } from "express"


export const pingHandler = (req:Request,res:Response) :void =>{

    res.status(201).json({

        mesage:"Hello World"

    })

}