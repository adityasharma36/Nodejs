

import express ,{Express} from 'express'
import { validateRequestBody } from '../validator/data.validator';
import { dataSchema } from '../validator/data.schema.validator';
import { getData } from '../controllers/ping.controller';

const router = express.Router();


router.get('/message',validateRequestBody(dataSchema),getData);


export default router;