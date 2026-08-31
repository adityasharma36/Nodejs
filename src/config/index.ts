// This file contains all the basic configuration logic for the app server to work
import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number
    REDIS_SERVER_URL:string
    SMTP_HOST:string,
    SMTP_PORT:number,
    SMTP_USER:string,
    SMTP_PASS:string

}

function loadEnv() {
    dotenv.config();
    console.log(`Environment variables loaded`);
}

loadEnv();

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001,
    REDIS_SERVER_URL :process.env.REDIS_SERVER_URL || 'redis://localhost:6379',
    SMTP_HOST:process.env.SMTP_HOST || '',
    SMTP_PORT:Number(process.env.SMTP_PORT) || 465,
    SMTP_USER:process.env.SMTP_USER || "",
    SMTP_PASS: process.env.SMTP_PASS || ''
};