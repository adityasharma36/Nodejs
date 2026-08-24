import dotenv from 'dotenv'


type serverType = {
    PORT:number
}

function configLoading(){
    dotenv.config();
}

configLoading();

type dbType = {
    USERNAME:string
    PASSWORD:string
    DATABASE:string
    HOST:string
}


export const serverConfig:serverType ={

    PORT:Number(process.env.PORT) || 3001
}

export const dbConfig:dbType = {
    USERNAME:process.env.DB_USER || "",
    PASSWORD: process.env.DB_PASSWORD || "",
    DATABASE: process.env.DB_NAME || "",
    HOST: process.env.DB_HOST || ""
}