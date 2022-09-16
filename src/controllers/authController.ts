import { Request, Response } from "express";
import { ISignUpData } from "../interfaces/AuthInterfaces.js";

import authServices from "../services/authServices.js";

async function signUp(req: Request, res: Response) {

    const data: ISignUpData = req.body;

    await authServices.createUser(data);

    res.status(200).send("The user was created!");
}