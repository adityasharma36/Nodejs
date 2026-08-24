
import express from 'express'
import { pingMessage } from '../controllers/ping.controller';
import { bodyValidate } from '../validator/body.validate';
import { pingSchema } from '../validator/pingschema.validator';

const pingRouter = express.Router();


pingRouter.get('/message',bodyValidate(pingSchema),pingMessage);


export default pingRouter;