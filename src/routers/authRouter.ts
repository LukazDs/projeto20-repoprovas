import { Router } from "express";
import * as authController from "../controllers/authController";
import { validateSignUpBody } from "../middlewares/validateUserRequest";

export const authRouter = Router();

authRouter.post('/signup', validateSignUpBody, authController.registerUser);