
import dotenv from 'dotenv'
function loadCredential(){
    dotenv.config();
}

loadCredential();

type credentialSchema = {
    PORT:number
}

export const configServer:credentialSchema = {
    PORT:Number(process.env.PORT) || 3000
}