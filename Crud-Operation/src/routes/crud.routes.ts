
import express from 'express'
import { BodyValidation } from '../validators/crud.validator';
import { authSchema } from '../schema/auth.schema';
import { authLogin } from '../controller/auth.controller';

const crudRouter = express.Router();


crudRouter.post('/login',BodyValidation(authSchema),authLogin);


export default crudRouter;