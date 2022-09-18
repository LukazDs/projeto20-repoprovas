import express from "express";
import cors from "cors";
import "express-async-errors";
import dotenv from "dotenv";
import { authRouter } from "./routers/authRouter";
import errorHandler from "./middlewares/errorHandler";
import { testRouter } from "./routers/testRouter";
import { disciplineRouter } from "./routers/disciplineRouter";
import { termRouter } from "./routers/termRouter";
import { teacherRouter } from "./routers/teacherRouter";
import { categorieRouter } from "./routers/categorieRouter";

dotenv.config();

const app = express();

app.use(express.json(), cors());

app.use(authRouter);
app.use(testRouter);
app.use(disciplineRouter);
app.use(termRouter);
app.use(teacherRouter);
app.use(categorieRouter);

app.use(errorHandler);

export default app;
