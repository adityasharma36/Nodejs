
import Redis from "ioredis";
import { serverConfig } from ".";

 function connectToRedist(){
    try {

       let connnection:Redis;

       return ()=>{
        if(!connnection){
            connnection = new Redis(serverConfig.REDIS_SERVER_URL,{
             maxRetriesPerRequest :null
            });
            return connnection
        }
            return connnection;
        
       }
         
    } catch (error) {
        console.log('Redis Failed')
        throw new Error("Redis Failed to connect");
    }
}

export const getRedisConnObj = connectToRedist();