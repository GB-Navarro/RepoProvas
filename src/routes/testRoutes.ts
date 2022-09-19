import { Router } from "express";

import testController from "../controllers/testController";
import genericMiddlewares from "../middlewares/genericMiddlewares";
import testSchemas from "../schemas/testSchemas";

const testRouter = Router();

testRouter.post("/tests/insert", genericMiddlewares.validateToken, genericMiddlewares.validateSchema(testSchemas.insert), testController.insert);
testRouter.get("/tests/searchByDiscipline", genericMiddlewares.validateToken, testController.searchByDiscipline);
testRouter.get("/tests/searchByTeacher", genericMiddlewares.validateToken, testController.searchByTeacher);

export default testRouter;