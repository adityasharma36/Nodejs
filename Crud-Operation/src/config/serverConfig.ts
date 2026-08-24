
import dotenv from 'dotenv'

type serverType = {

    PORT:number

}

type dbType = {
    database:string
    host:string
    password:string
    username:string
}

function loadEnv(){

    dotenv.config();

}

loadEnv();

export const dbConfig:dbType = {
    database:process.env.DB_NAME || "",
    host:process.env.DB_HOST || "localhost",
    password:process.env.DB_PASSWORD || "",
    username:process.env.DB_USER || "root",
}

export const serverConfig:serverType = {
    PORT:Number(process.env.PORT) || 3000
}