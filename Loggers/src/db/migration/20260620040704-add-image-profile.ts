import { QueryInterface } from "sequelize";
export = {
  async up (queryInterface:QueryInterface) {
    await queryInterface.sequelize.query(`ALTER TABLE users ADD COLUMN image VARCHAR(255)`);
  },

  async down (queryInterface:QueryInterface) {
    await queryInterface.sequelize.query(`ALTER TABLE users DROP COLUMN image`);
  }
};
