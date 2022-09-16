import { Router } from "express";
import * as testController from "../controllers/testController";
import { validateTestBody } from "../middlewares/validateTestRequest";
import { validateToken } from "../middlewares/validateToken";

export const testRouter = Router();

testRouter.post('/tests', validateToken, validateTestBody, testController.insertTest);
