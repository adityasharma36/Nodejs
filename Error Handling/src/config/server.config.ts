
import dotenv from 'dotenv'

function processEnv(){
    dotenv.config();
}

processEnv();

type serverCongig={
    PORT:number
}
export const serverConfig:serverCongig = {
    PORT : Number(process.env.PORT)
} 