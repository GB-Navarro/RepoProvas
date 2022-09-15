import { Router } from "express";

import exampleRouter from "./exampleRoutes.js";

const router = Router();

router.use(exampleRouter);

export default router;