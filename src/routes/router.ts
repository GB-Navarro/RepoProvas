import { Router } from "express";

import exampleRouter from "./exampleRoutes.js";
import authRouter from "./authRoutes.js";

const router = Router();

router.use(exampleRouter);
router.use(authRouter);

export default router;