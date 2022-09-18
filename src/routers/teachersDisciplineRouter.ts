import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import * as teacherDisciplineController from "../controllers/teachersDisciplineController";

export const teachersDisciplineRouter = Router();

teachersDisciplineRouter.get(
  "/disciplines/:disciplineId/tests/teachers",
  validateToken,
  teacherDisciplineController.getTeachersDisciplinesByDisciplineId
);

teachersDisciplineRouter.get(
  "/teachers/:teacherId/tests/disciplines",
  validateToken,
  teacherDisciplineController.getTeachersDisciplinesByTeacherId
);
