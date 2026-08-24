
 export interface AppError extends Error{

    statusCode:number;

}


export class InternalServerError implements AppError{
    statusCode: number;
    name:string;
    message: string;

    constructor(message:string){
        this.statusCode= 500;
        this.name="InternalServerError";
        this.message = message;
    }
}

export class NotFoundError implements AppError{
    statusCode: number;
    name:string;
    message: string;

    constructor(message:string){
        this.statusCode= 404;
        this.name="NotFoundError";
        this.message = message;
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