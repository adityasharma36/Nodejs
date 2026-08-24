
import { dbConfig } from "./serverConfig.ts"

export default{
  "development": {
    "username": dbConfig.DB_USER,
    "password": dbConfig.DB_PASSWORD,
    "database": dbConfig.DB_NAME,
    "host": dbConfig.DB_HOST,
    "dialect": "mysql"
  }
}