import { Router } from "express";

import authSchemas from "../schemas/authSchemas";
import genericMiddlewares from "../middlewares/genericMiddlewares";
import authController from "../controllers/authController";

const authRouter = Router();

authRouter.post("/sign-up", genericMiddlewares.validateSchema(authSchemas.signUp), authController.signUp);
authRouter.post("/sign-in", genericMiddlewares.validateSchema(authSchemas.signIn), authController.signIn);

export default authRouter;