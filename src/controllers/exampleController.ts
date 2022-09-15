import { Request, Response } from "express";

async function example(req: Request, res: Response){

    res.status(200).send("Hello World");
}

const exampleControllers = {

    example
}

export default exampleControllers;