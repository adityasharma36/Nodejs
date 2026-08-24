
import logger from "../config/logger.config";
import User from "../db/model/user";
import { userTypeDTO } from "../dtos/user.dto";
import { NotFoundError, UserAlreadyExist } from "../utils/error/crud.error";

export async function isUserExist(username:string){
    
    const isExist = await User.findOne({where:{name:username}});

    return isExist;
}

export async function registerUser(userDetail:userTypeDTO){

    const user = await User.create({name:userDetail.name,email:userDetail.email,password:userDetail.password});

    return user;

}


export async function findUserById(id:number){

    const user = await User.findByPk(id);

    if(!user){
        throw new NotFoundError(`User with id ${id} not found`);
    }
    return user;

}

export async function getAllUser(){

    const allUser = await User.findAll({where:{
        deletedAt:null
    }});

    if(!allUser){
        throw new NotFoundError("No user found");
    }   

    return allUser;

}

export async function softDeleteUser(id:number){

    // const user = await User.destroy({where:{id:id}});
    const user= await User.findByPk(id);

    if(!user){
        throw new NotFoundError(`User with id ${id} not found`);
    }
    user.deletedAt = new Date();
    await user.save();
    logger.info(`user has been deleted ${id}`)
    return user;
    
}

export async function updateUser(userDetail:userTypeDTO){

    const user = await User.update({

        name:userDetail.name,
        email:userDetail.email,
        password:userDetail.password

    },
        {where:{id:userDetail.id}})

    if(!user){
        throw new NotFoundError(`User with id ${userDetail.id} not found`);
    }   
    
        return user;

}