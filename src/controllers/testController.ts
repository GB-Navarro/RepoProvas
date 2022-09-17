import { Request, Response } from "express";
import { ITestData, IUnformatedTestObtainedByTermAndDiscipline } from "../interfaces/testInterfaces.js";
import testServices from "../services/testServices.js";

async function insert(req: Request, res: Response) {

    const data: ITestData = req.body;
    
    await testServices.insert(data);

    res.status(200).send("Hello World");
}

async function searchByDiscipline(req: Request, res: Response) {

    const data: IUnformatedTestObtainedByTermAndDiscipline[]  = await testServices.getManyByTermAndDiscipline();

    res.status(200).send(data);
}

async function searchByTeacher(req: Request, res: Response) {
    
    res.status(200).send("Os dados serão enviados por aqui");
}

const testController = {

    insert,
    searchByDiscipline,
    searchByTeacher
}

export default testController;