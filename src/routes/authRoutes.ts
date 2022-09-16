import { Router } from "express";

import authSchemas from "../schemas/authSchemas.js";
import validateSchema from "../middlewares/validateSchema.js";
import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(authSchemas.signUp), authController.signUp);
authRouter.post("/sign-in", validateSchema(authSchemas.signIn), authController.signIn);

export default authRouter;