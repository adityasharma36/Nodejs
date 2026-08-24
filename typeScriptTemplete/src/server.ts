import express from 'express'
import { configServer } from './config';

import v1Router from './routers/v1/index.routes';
import v2Router from './routers/v2/index.route';


const app = express();


// app.use(pingRouter);

app.use('/api/v1',v1Router)

app.use('/api/v2',v2Router)

console.log('env files all load')
app.listen(configServer.PORT,()=>{

    console.log(`Sever hase been started ${configServer.PORT} `)
})

