
import { serverConfig } from "./config/serverConfig";
import express from 'express'
import crudRouter from "./routes/crud.routes";
import userRouter from "./routes/user.routes";
import { genericError } from "./middleware/error.middleware";
import logger from "./config/logger.config";
import { corelationIdMiddleware } from "./middleware/corelation.middleware";
import sequelize from "./db/model/sequelize";



const app = express();


app.use(express.json());
app.use(corelationIdMiddleware)

app.use('/api/v1',crudRouter)
app.use('/api/v1', userRouter)

app.use(genericError)

app.listen(serverConfig.PORT,async ()=>{
    logger.info(`server running on port ${serverConfig.PORT}`);

    try {
        await sequelize.authenticate();
        logger.info("sql connected");
    } catch (error) {
        logger.error(error as Error);
    }

})