

import express from 'express'
import {  serverConfig } from './config/serverConfig';
import pingRouter from './routes/ping.route';
import { genericError } from './middleware/error.middleware';
import logger from './config/logger.config';
import { corelationIdMiddleware } from './middleware/corelation.middleware';
import sequelize from './db/model/sequelize';
import User from './db/model/user';
import userRouter from './routes/user.route';


const app = express();

// app.use(logger)
// app.use()
app.use(express.json());
app.use(corelationIdMiddleware)
app.use("/api/v1",pingRouter)

app.use("/api/v1",userRouter)

app.use(genericError)

app.listen(serverConfig.PORT,async ()=>{
    console.log(`Server is running on port ${serverConfig.PORT}`);
    logger.info("sever hase been started on this ")

    try {
        
    await sequelize.authenticate();
    logger.info("database has been connnected");


    } catch (error) {
        console.log("Error IN Database")
    }
})

