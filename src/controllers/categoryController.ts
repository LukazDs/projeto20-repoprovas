import { Category } from "@prisma/client";
import { Request, Response } from "express";
import * as categoryServices from "../services/categoryServices";

export async function getCategories(_req: Request, res: Response) {
  const categories: Category[] = await categoryServices.findCategories();

  res.status(200).send(categories);
}
