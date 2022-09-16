import { Request, Response } from "express";
import { ISignUpData, IUserData } from "../interfaces/AuthInterfaces.js";

async function signUp(req: Request, res: Response) {

    const data: ISignUpData = req.body;

    res.status(200).send("The user was created!");
}