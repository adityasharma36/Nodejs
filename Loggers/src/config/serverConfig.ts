

import dotenv from 'dotenv'

function loadEnv(){
    dotenv.config();
}

loadEnv();


type serverConfigType = {
    PORT:number,
    
}

type dbConfigType = {
    DB_USER:string,
    DB_PASSWORD:string,
    DB_HOST:string,
    DB_NAME:string
}

export const serverConfig:serverConfigType = {
    PORT:Number(process.env.PORT),
    
}

export const dbConfig:dbConfigType ={
    DB_USER:process.env.DB_USER || 'root',
    DB_PASSWORD:process.env.DB_PASSWORD || "",
    DB_HOST:process.env.DB_HOST || 'localhost',
    DB_NAME:process.env.DB_NAME || 'localDb'
}