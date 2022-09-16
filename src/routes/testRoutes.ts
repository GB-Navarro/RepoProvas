import { Router } from "express";

import testController from "../controllers/testController.js";
import validateSchema from "../middlewares/validateSchema.js";
import testSchemas from "../schemas/testSchemas.js";


const testRouter = Router();

testRouter.post("/tests/insert", validateSchema(testSchemas.insert), testController.insert);

export default testRouter;