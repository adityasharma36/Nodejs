
import { Request, Response  } from "express";
import { createBookingService, finalizedBookingService } from "../services/booking.services";
import { StatusCodes } from "http-status-codes";

export const createBookingHandler = async (req:Request,res:Response) =>{
    

    const booking = await createBookingService(req.body);
  

    res.status(StatusCodes.OK).json({
        bookingId: booking.bookingId,
        idempotencyKey: booking.idempotencyKey
    })
}

export const confirmBookingHandler = async (req:Request,res:Response) => {

   
 
    const booking = await finalizedBookingService(req.params.idempotencyKey);

    res.status(StatusCodes.OK).json({
        booking
    })
}