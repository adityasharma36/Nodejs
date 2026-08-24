import { Sequelize } from "sequelize";
import { dbConfig } from "../../config/serverConfig";
 const sequelize = new Sequelize({
    "username": dbConfig.DB_USER,
    "password": dbConfig.DB_PASSWORD,
    "database": dbConfig.DB_NAME,
    "dialect": "mysql",
    logging:true
})

export default sequelize;