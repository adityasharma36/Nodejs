
import express from 'express'

import { serverConfig } from './config/server.config'
import pingRouter from './routes/ping.route';
import { genericHandlerError } from './middleware/erorr.middleware';
import logger from './config/logger.config';
import { corelationIdMiddleWare } from './middleware/corelation.middleware';

const app = express();


app.use(express.json());

app.use(corelationIdMiddleWare);

app.use('/api/v1',pingRouter);

app.use(genericHandlerError);


app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on Port ${serverConfig.PORT}`)
    logger.info(`Server has been started on ${3000}`,{"hello":"marry"});
})
