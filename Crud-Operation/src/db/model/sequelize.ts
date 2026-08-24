import { Sequelize } from 'sequelize';
import { dbConfig } from '../../config/serverConfig';

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'mysql',
    logging: true,
  }
);

export default sequelize;