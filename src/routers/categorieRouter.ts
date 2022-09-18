import { Router } from "express";
import * as categorieController from "../controllers/categoryController";
import { validateToken } from "../middlewares/validateToken";

export const categorieRouter = Router();

categorieRouter.get(
  "/categories",
  validateToken,
  categorieController.getCategories
);

categorieRouter.get(
  "/categories/:id",
  validateToken,
  categorieController.getCategoryById
);
