import { Router } from "express";
import * as testController from "../controllers/testController";
import { validateTestBody } from "../middlewares/validateTestRequest";

export const testRouter = Router();

testRouter.post('/tests', validateTestBody, testController.insertTest);
