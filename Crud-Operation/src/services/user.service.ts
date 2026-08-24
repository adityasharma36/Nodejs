import { userTypeDTO } from "../dtos/user.dto";
import { softDeleteUser, findUserById, getAllUser, isUserExist, registerUser, updateUser } from "../repositories/user.repositories";
import { UserAlreadyExist } from "../utils/error/crud.error";

export async function createUserService(userData: userTypeDTO) {
    const isUserNamePresent = await isUserExist(userData.name);
    if (isUserNamePresent) {
        throw new UserAlreadyExist(`This username already exists: ${userData.name}`);
    }

    const user = await registerUser(userData);
    return user;
}

export async function findUserByIdService(id:number) {
    
    const user = await findUserById(id);

    return user;

}

export async function getAllUserServies(){
    const allUser = await getAllUser();
    return allUser
}

export async function deleteUserService(id:number) { 

    const user = await softDeleteUser(id);

    return user;

}

export async function updateUserService(userData:userTypeDTO){
    const user = await updateUser(userData);
    return user;
}