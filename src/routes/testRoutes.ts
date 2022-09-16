import { Router } from "express";

import testController from "../controllers/testController.js";

const testRouter = Router();

testRouter.post("/tests/insert", testController.insert);

export default testRouter;