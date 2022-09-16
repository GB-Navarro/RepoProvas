import { Router } from "express";

import authSchemas from "../schemas/authSchemas.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";
import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", genericMiddlewares.validateSchema(authSchemas.signUp), authController.signUp);
authRouter.post("/sign-in", genericMiddlewares.validateSchema(authSchemas.signIn), authController.signIn);

export default authRouter;