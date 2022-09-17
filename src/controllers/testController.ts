import { Request, Response } from "express";
import { ITestData, IUnformatedTestObtainedByTeacherName, IUnformatedTestObtainedByTermAndDiscipline } from "../interfaces/testInterfaces.js";

import testServices from "../services/testServices.js";

async function insert(req: Request, res: Response) {

    const data: ITestData = req.body;

    await testServices.insert(data);

    res.status(200).send("The test has been inserted!");
}

async function searchByDiscipline(req: Request, res: Response) {

    const data: IUnformatedTestObtainedByTermAndDiscipline[] = await testServices.getManyByTermAndDiscipline();

    res.status(200).send(data);
}

async function searchByTeacher(req: Request, res: Response) {

    const data: IUnformatedTestObtainedByTeacherName[] = await testServices.getManyByTeacherName();

    res.status(200).send(data);
}

const testController = {

    insert,
    searchByDiscipline,
    searchByTeacher
}

export default testController;