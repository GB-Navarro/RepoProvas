import { Request, Response } from "express";

async function insert(req: Request, res: Response) {

    res.status(200).send("Hello World");
}

const testController = {

    insert
}

export default testController;