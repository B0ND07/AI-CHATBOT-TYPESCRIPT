import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import morgan from "morgan";
import router from "./routes/index.js";
import cors from "cors"
config();

const app = express();


app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));

app.use("/api/v1", router);
app.get("/", (req: Request, res:Response) => {
  res.status(200).json({ message: "Hello World" });
});

export default app;
