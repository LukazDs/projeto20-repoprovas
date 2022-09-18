import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import * as disciplineController from "../controllers/disciplineController";

export const disciplineRouter = Router();

disciplineRouter.get(
  "/disciplines/:termId",
  validateToken,
  disciplineController.findDisciplineByTermId
);

disciplineRouter.get(
  "/disciplines",
  validateToken,
  disciplineController.getDisciplines
);
