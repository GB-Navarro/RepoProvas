import { Router } from "express";

import testController from "../controllers/testController.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";
import testSchemas from "../schemas/testSchemas.js";


const testRouter = Router();

testRouter.post("/tests/insert", genericMiddlewares.validateSchema(testSchemas.insert), testController.insert);

export default testRouter;