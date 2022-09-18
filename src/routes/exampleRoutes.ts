import { Router } from "express";

import exampleControllers from "../controllers/exampleController";

const exampleRouter = Router();

exampleRouter.get("/example", exampleControllers.example);

export default exampleRouter;