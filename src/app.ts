import express from "express";
import cors from "cors";
import "express-async-errors";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler";
import { authRouter } from "./routers/authRouter";

dotenv.config();

const app = express();

app.use(express.json(), cors());
app.use(authRouter)
app.use(errorHandler);

export default app;