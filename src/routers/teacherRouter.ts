import { Router } from "express";
import * as teacherController from "../controllers/teacherController";
import { validateToken } from "../middlewares/validateToken";

export const teacherRouter: Router = Router();

teacherRouter.get("/teachers", validateToken, teacherController.getTeachers);
