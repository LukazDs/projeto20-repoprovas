import { Router } from "express";
//import { validateToken } from "../middlewares/validateToken";
import * as disciplineController from "../controllers/disciplineController";

const disciplineRouter = Router();

disciplineRouter.get(
  "/disciplines/:id",
  disciplineController.findDisciplineById
);
