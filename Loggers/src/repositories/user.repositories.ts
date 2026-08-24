
import logger from "../config/logger.config";
import User from "../db/model/user";
import { CreateUserDTO } from "../dto/user.dto";
import { NotFoundError } from "../utils/errors/ping.error";

export async function createUser(userDetail:CreateUserDTO){
    const user = await User.create(userDetail);
    logger.info(`user has been created ${user.name}`)

    return user;
}

export async function getUser(id:number) {

    const user = await User.findByPk(id);

    if(!user){
        logger.error(`User with this id ${id} not found`)
        throw new NotFoundError(`User with this id ${id} not found`);

    }
    return user;
    
}