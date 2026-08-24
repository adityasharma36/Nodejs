

import dotenv from 'dotenv'

type configServer={
    PORT:number
}

function loadEnv(){
    dotenv.config();
}

loadEnv();

export const configServer:configServer = {

    PORT:Number(process.env.PORT) || 3001
    
}

// export default loadEnv;