import express from "express";
import cors from "cors";
import "express-async-errors";
import dotenv from "dotenv";
import { authRouter } from "./routers/authRouter";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(express.json(), cors());

app.use(authRouter);
app.use(errorHandler);

export default app;