
import express, { type Request, type Response } from 'express'
import { bodyValidator } from '../validator/body.validator.ts';
import { userSchema } from '../schema/users.schema.ts';
import { getData } from '../controllers/user.controller.ts';

const userRoutes = express.Router();

userRoutes.get('/',(req:Request,res:Response)=>{
    console.log('correct');
    res.status(201).json({
        mesage:"server run correctly"
    })
})
userRoutes.post('/login',bodyValidator(userSchema),getData)

export default userRoutes;