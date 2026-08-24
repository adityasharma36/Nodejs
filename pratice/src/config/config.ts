
import { dbConfig } from "./serverConfig.ts";

 export default{

    "development":{

         "username": dbConfig.USERNAME,
        "password": dbConfig.PASSWORD,
        "database": dbConfig.DATABASE,
        "host": dbConfig.HOST,
        "dialect": "mysql"

    }

 }