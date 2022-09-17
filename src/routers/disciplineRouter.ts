import { Router } from "express";
//import { validateToken } from "../middlewares/validateToken";

const disciplineRouter = Router();

disciplineRouter.get("/disciplines/:id", () => {
  console.log("Entrei no controller!");
});
