
import express from 'express'
import { deleteUserHandler, getAllUserHandler, getUserByIdHandler, updateUserHandler, userRegistationHandler } from '../controller/user.controller';
import { BodyValidation } from '../validators/crud.validator';
import { createUserSchema, updateUserSchema } from '../schema/user.schema';

const userRouter = express.Router();


userRouter.post('/users', BodyValidation(createUserSchema), userRegistationHandler);
userRouter.get('/users', getAllUserHandler);
userRouter.get('/users/:id', getUserByIdHandler);
userRouter.put('/users/:id', BodyValidation(updateUserSchema), updateUserHandler);
userRouter.delete('/users/:id', deleteUserHandler);

export default userRouter;