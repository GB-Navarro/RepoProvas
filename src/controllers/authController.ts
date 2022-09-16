import { Request, Response } from "express";
import { ISignUpData, IUserData } from "../interfaces/authInterfaces.js";

import authServices from "../services/authServices.js";

async function signUp(req: Request, res: Response) {

    const data: ISignUpData = req.body;

    await authServices.createUser(data);

    res.status(201).send("The user was created!");
}

async function signIn(req: Request, res: Response){

    const data: IUserData = req.body;

    const token:string = await authServices.login(data);
    
    res.status(200).send(token);
}

const authController = {

    signUp,
    signIn
}

export default authController;