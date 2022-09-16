import { Router } from "express";

import exampleRouter from "./exampleRoutes.js";
import authRouter from "./authRoutes.js";
import testRouter from "./testRoutes.js";

const router = Router();

router.use(exampleRouter);
router.use(authRouter);
router.use(testRouter);

export default router;