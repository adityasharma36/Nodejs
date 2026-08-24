import { QueryInterface,DataTypes } from "sequelize";

export = {
  async up (queryInterface:QueryInterface) {
    await queryInterface.addColumn('users','deletedAt',{
        type:DataTypes.DATE,
        allowNull:true,
        defaultValue: null,
        
      })
    
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.removeColumn('users','deletedAt');
  }
};
