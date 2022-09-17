import { Router } from "express";
import * as termController from "../controllers/termController";
import { validateToken } from "../middlewares/validateToken";

export const termRouter = Router();

termRouter.get("/terms", validateToken, termController.getTerms);
