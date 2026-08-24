
export interface AppError extends Error{
    statusCode:number
}

export class InternalError implements AppError{
    statusCode: number
    name: string
    message: string
    constructor(message:string){
        this.statusCode = 400;
        this.message = message;
        this.name = "InternalError"
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