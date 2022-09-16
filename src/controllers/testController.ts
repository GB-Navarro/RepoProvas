import { Request, Response } from "express";
import { ITestData } from "../interfaces/testInterfaces.js";
import testServices from "../services/testServices.js";

async function insert(req: Request, res: Response) {

    const data: ITestData = req.body;
    
    await testServices.insert(data);

    res.status(200).send("Hello World");
}

const testController = {

    insert
}

export default testController;