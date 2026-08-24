import { CreateUserDTO } from "../dto/user.dto";
import { createUser, getUser } from "../repositories/user.repositories";

export async function createUserService(userData:CreateUserDTO){

    const user = await createUser(userData);

    return user
    
}

export async function getUserByIdService(userId:number){
    const user = await getUser(userId);

    return user
}