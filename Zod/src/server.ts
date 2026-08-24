
import express ,{Express} from 'express'

import { configServer } from "./config/credential.config";
import pingRouter from './routes/ping.route';
import { genericErrorHandlere } from './middleware/error.middleware';


const app:Express = express();

app.use(express.json());


app.use('/api/v1',pingRouter)

app.use(genericErrorHandlere);


app.listen(configServer.PORT,()=>{

    console.log(`server has been Started on Port . ${configServer.PORT}`)

})
