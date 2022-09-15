import { Router } from "express";
import { validateUserRequestBody } from "../middlewares/validateRequestBodyUser";

export const authRouter = Router();

authRouter.post('/signin', validateUserRequestBody);
