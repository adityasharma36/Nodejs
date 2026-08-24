
import { dbConfig } from "./serverConfig.ts"

export default{
  "development": {
    "username": dbConfig.username,
    "password": dbConfig.password,
    "database": dbConfig.database,
    "host": dbConfig.host,
    "dialect": "mysql"
  }
}