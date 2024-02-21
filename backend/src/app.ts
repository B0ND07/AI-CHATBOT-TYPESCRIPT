import express from "express";

import { config } from "dotenv";
import morgan from "morgan";
import router from "./routes/index.js";
config();

const app = express();
app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1", router);

export default app;
