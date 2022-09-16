import { Request, Response } from "express";
import { ITestData } from "../interfaces/testInterfaces.js";

async function insert(req: Request, res: Response) {

    const data: ITestData = req.body;
     
    res.status(200).send("Hello World");
}

const testController = {

    insert
}

export default testController;