import express from "express";
import "express-async-errors";

import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export default app;

