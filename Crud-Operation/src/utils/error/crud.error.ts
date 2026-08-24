
export interface AppError extends Error{

    statusCode:number

}

export class InternalServerError implements AppError{

    statusCode: number
    message: string
    name: string
    constructor(message:string){
        this.message = message;
        this.name= "InternalServerError"
        this.statusCode = 500
    }

}

export class NotFoundError implements AppError{

    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.message = message
        this.name = "NotFoundError"
        this.statusCode = 404
    }
}

export class BadRequestError implements AppError{
    
    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.name = "BadRequestError",
        this.message = message,
        this.statusCode = 400
    }
}

export class EntityError implements AppError{

    statusCode: number;
    message: string;
    name: string;

    constructor(message: string){

        this.name = "EntityError";

        this.message = message;

        this.statusCode = 422
    }
}



export class UnAuthorisiedError implements AppError{
    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.name = "UnAuthorisiedError"
        this.message= message;
        this.statusCode = 401
    }
}

export class UserAlreadyExist implements AppError{
    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.name = "UserAlreadyExist",
        this.message = message,
        this.statusCode = 409
    }
}