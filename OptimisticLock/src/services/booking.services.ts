
import { bookingDto } from '../dto/booking.dto';
import { bookingValid, confirmBooking, createBooking, createIdempotencyKey, finalizedIdempotencyKey, getIdempotencyKeyWithLock } from '../repositories/booking.repositories'
import { BadRequestError,  InternalServerError,  NotFoundError } from '../utils/errors/app.error';
import { generateIdempotencyKey } from '../utils/generateIdempotencyKey'
import PrismaClient from '../prisma/client'


export async function createBookingService(bookingDto:bookingDto){



    try {
  

        const booking = await createBooking({
            userId:bookingDto.userId,
            hotelId: bookingDto.hotelId,
            bookingAmount:bookingDto.bookingAmount
        })

        const idempotencyKey = generateIdempotencyKey();

        await createIdempotencyKey(idempotencyKey,booking.id);


        return {
            bookingId:booking.id,
            idempotencyKey:idempotencyKey
            }   
         } 
    catch (error) {
        throw new InternalServerError('hotel already booked')
    }
    
  

}

export async function finalizedBookingService(idempotencyKey:string){

    return await PrismaClient.$transaction(async (tx)=>{

         const idempotencyKeyData = await getIdempotencyKeyWithLock(tx,idempotencyKey);

        if(!idempotencyKeyData){
            throw new NotFoundError("idempotencyKey not found")
        }

        if(idempotencyKeyData.finalized){
            throw new BadRequestError("idempotencyKey already finalized ")
        }
        const check = await bookingValid(tx,idempotencyKeyData.bookingId);
        const booking = await confirmBooking(tx,idempotencyKeyData.bookingId)
        await finalizedIdempotencyKey(tx,idempotencyKey);

    return booking;

    })
    
}