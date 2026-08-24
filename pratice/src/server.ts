import express from 'express'

import { serverConfig } from './config/serverConfig.ts';
import userRoutes from "./routes/users.route.ts";
import { corelationMiddleware } from './middleware/corelation.middleware.ts';
import logger from './config/loggerConfig.ts';
import { genericError } from './middleware/generic.middleware.ts';

const app = express();

app.use(express.json());
app.use(corelationMiddleware)
app.use("/api/v1",userRoutes)

app.use(genericError)

app.listen(serverConfig.PORT,()=>{

    console.log(`server has been running on port ${serverConfig.PORT} `)
    logger.info('hello World this is me ')
})
