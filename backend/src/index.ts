import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import morgan from "morgan";
import router from "./routes/index.js";
import cors from "cors"
import { connectDatabase } from "./config/database.js";




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
const PORT = process.env.PORT || 5000;
connectDatabase()
  .then(() => {
    app.listen(PORT, () => console.log("server running on 5000"));
  })
  .catch((err) => console.log(err));

export default app;
