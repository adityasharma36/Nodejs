
export interface AppError extends Error{
    statusCode:number;
}

export class InternalServerError implements AppError{
    statusCode: number;
    name: string;
    message: string;

    constructor(message:string){
        this.message= message;
        this.name= "InternalServerError",
        this.statusCode = 500
    }
}

export class NotFoundError implements AppError{
    statusCode:number;
    name:string;
    message:string;
    
    constructor(message:string){
        this.name = "NotFoundError",
        this.message= message,
        this.statusCode=404
    }
}

export class BadRequestError implements AppError{
    statusCode: number;
    name:string;
    message: string;

    constructor(message:string){
        this.statusCode= 404;
        this.name="BadRequestError";
        this.message = message;
    }
}