import { Router } from "express";
//import { validateToken } from "../middlewares/validateToken";
import * as termController from "../controllers/termController";

export const termRouter = Router();

termRouter.get("/terms", termController.getTerms);
