import express from "express";
import cors from "cors";
import "express-async-errors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json(), cors());

//app.use(errorHandler);

export default app;