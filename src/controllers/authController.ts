import { Request, Response } from "express";
import { ISignUpData, IUserData } from "../interfaces/AuthInterfaces.js";

import authServices from "../services/authServices.js";

async function signUp(req: Request, res: Response) {

    const data: ISignUpData = req.body;

    await authServices.createUser(data);

    res.status(201).send("The user was created!");
}

async function signIn(req: Request, res: Response){

    const data: IUserData = req.body;

    await authServices.login(data);
    
    res.status(200).send("O token vai ser retornado!");
}

const authController = {

    signUp,
    signIn
}

export default authController;