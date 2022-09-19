import { Request, Response, NextFunction } from "express";

export default async function errorHandler(error: any, req: Request, res: Response, next: NextFunction){

    if(error.code === "error_thisEmailIsNotRegistered" || error.code === "error_wrongPassword" || error.code === "error_notReceivedAToken"){
        return res.status(401).send(error.message);
    }
    if(error.code === "error_emailAlreadyInUse"){
        return res.status(409).send(error.message);
    }
    if(error.code === "error_thePasswordsAreNotEqual"){
        return res.status(422).send(error.message);
    }

    console.log(error.message);
    
    return res.sendStatus(500);
}