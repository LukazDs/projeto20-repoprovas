import { Router } from "express";
import { validateSignUpBody } from "../middlewares/validateUserRequest";

export const authRouter = Router();

authRouter.post('/signin', validateSignUpBody);