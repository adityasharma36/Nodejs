
import express from 'express'
import { validateRequestBody } from '../validator/index';
import { objectSchema } from '../validator/ping.validator';
import { getData } from '../controllers/ping.controller';

const pingRouter = express.Router();


pingRouter.get('/login',validateRequestBody(objectSchema),getData);

export default pingRouter