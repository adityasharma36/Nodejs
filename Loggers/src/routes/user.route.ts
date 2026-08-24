

import express from 'express'
import { createUserHandler, getUserByIdHandler } from '../controllers/user.controller';
import { bodyValidate } from '../validator/body.validate';
import { userSchema } from '../validator/userschema.validator';

const userRouter = express.Router();


userRouter.post('/users',bodyValidate(userSchema),createUserHandler);
userRouter.get("/users/:id",getUserByIdHandler);

export default userRouter  