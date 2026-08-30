
import { Prisma , IdeompotenceKey,Booking} from "../generated/prisma/client";
import prismaClient from '../prisma/client'
import {validate as isValidUUID} from 'uuid'
import { BadRequestError,  NotFoundError } from "../utils/errors/app.error";

export async function createBooking(bookingInput:Prisma.BookingCreateInput){

    const booking = await prismaClient.booking.create({
        data:bookingInput
    })
    return booking;

}

export async function createIdempotencyKey(key:string,bookingId:number){
    const idempotencyKey = await prismaClient.ideompotenceKey.create({
        data:{
            idemKey:key,
            booking:{
                connect:{
                    id:bookingId
                }
            }
        }
    })
    return idempotencyKey;
}

export async function getBookingById(bookingId:number){
    const bookingDetails = await prismaClient.booking.findUnique({
        where:{
            id:bookingId
        }
    })
    return bookingDetails;
}

// export async function changeBookingStatus(bookingId:number,status:Prisma.EnumbookingStatusFieldUpdateOperationsInput) {
    //     const bookingDetails = await prismaClient.booking.update({
        //         where:{
            //             id:bookingId
            //         },
            //         data:{
                //             status:status
                //         }
                //     })
                //     return bookingDetails
                // }
export async function getIdempotencyKeyWithLock(tx:Prisma.TransactionClient,key:string){
        if(!isValidUUID(key)){
            throw new BadRequestError(" Invalid IdeompotenceKey ")
        }
                   
        const ideomKey:Array<IdeompotenceKey> = await tx.$queryRaw(
                        Prisma.raw(`SELECT * FROM IdeompotenceKey WHERE idemKey = '${key}' FOR UPDATE`)
        )
                
                
                
        if(!ideomKey || ideomKey.length === 0){
            throw new NotFoundError("ideomKey not found");
        }
            return ideomKey[0];
     }
export async function bookingValid(tx:Prisma.TransactionClient,bookingId:number){
   
    const booking:Array<Booking> = await tx.$queryRaw(Prisma.raw(`SELECT * from booking where id = '${bookingId}' And version == 0`));
    
    if(!booking || )

}
export async function confirmBooking(tx:Prisma.TransactionClient,bookingId:number){
    const booking = await tx.booking.update({
        where:{
            id:bookingId
        },
        data:{
            status:"CONFIRM"
        }
    })
    return booking;
}
export async function cancelledBooking(bookingId:number){
    const booking = await prismaClient.booking.update({
        where:{
            id:bookingId
        },
        data:{
            status:"CANCELLED"
        }
    })
    return booking;
}

export async function finalizedIdempotencyKey(tx:Prisma.TransactionClient,key:string){
    const ideomKey = await tx.ideompotenceKey.update({
        where:{
            idemKey:key
        },
        data:{
            finalized: true
        }
    })
    return ideomKey
}