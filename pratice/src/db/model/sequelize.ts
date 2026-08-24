import { Sequelize } from 'sequelize';
import { dbConfig } from '../../config/serverConfig.ts';

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: 'mysql',
    logging: true,
  }
);

export default sequelize;