import { Router } from "express";

import exampleRouter from "./exampleRoutes";
import authRouter from "./authRoutes";
import testRouter from "./testRoutes";

const router = Router();

router.use(exampleRouter);
router.use(authRouter);
router.use(testRouter);

export default router;