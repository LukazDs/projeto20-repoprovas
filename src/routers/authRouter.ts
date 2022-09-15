import { Router } from "express";
import * as authController from "../controllers/authController";
import { validateSignInBody } from "../middlewares/validateUserRequest";

export const authRouter = Router();

authRouter.post('/signin', validateSignInBody, authController.loginUser);
