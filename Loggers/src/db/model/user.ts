import { Model, CreationOptional, InferAttributes, InferCreationAttributes, DataTypes } from "sequelize";
import sequelize from "./sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {

    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare password: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

User.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
},{

    tableName:"users",
    sequelize:sequelize,
    timestamps:true,

})

export default User;