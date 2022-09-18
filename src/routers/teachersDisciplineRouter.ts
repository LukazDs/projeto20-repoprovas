import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import * as teacherDisciplineController from "../controllers/teachersDisciplineController";

export const teachersDisciplineRouter = Router();

teachersDisciplineRouter.get(
  "/terms/disciplines/:disciplineId/tests/teachers",
  validateToken,
  teacherDisciplineController.getTeachersDisciplinesByDisciplineId
);
