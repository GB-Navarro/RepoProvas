import { Request, Response } from "express";
import { ITestData, IUnformatedTestObtainedByTermAndDiscipline } from "../interfaces/testInterfaces.js";
import testServices from "../services/testServices.js";

async function insert(req: Request, res: Response) {

    const data: ITestData = req.body;
    
    await testServices.insert(data);

    res.status(200).send("Hello World");
}

async function searchByDiscipline(req: Request, res: Response) {

    const data: IUnformatedTestObtainedByTermAndDiscipline[]  = await testServices.getManyById();

    res.status(200).send(data);
}
const testController = {

    insert,
    searchByDiscipline
}

export default testController;