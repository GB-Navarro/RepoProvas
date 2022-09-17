import { Router } from "express";

import testController from "../controllers/testController.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";
import testSchemas from "../schemas/testSchemas.js";


const testRouter = Router();

testRouter.post("/tests/insert", genericMiddlewares.validateToken ,genericMiddlewares.validateSchema(testSchemas.insert), testController.insert);
testRouter.get("/tests/searchByDiscipline", genericMiddlewares.validateToken, testController.searchByDiscipline);
export default testRouter;