import { Router } from "express";
import * as authController from "../controllers/authController";
import {
  validateSignInBody,
  validateSignUpBody,
} from "../middlewares/validateUserRequest";

export const authRouter = Router();

authRouter.post("/signin", validateSignInBody, authController.loginUser);
authRouter.post("/signup", validateSignUpBody, authController.registerUser);
