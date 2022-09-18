import { Category } from "@prisma/client";
import { Request, Response } from "express";
import * as categoryServices from "../services/categoryServices";

export async function getCategories(_req: Request, res: Response) {
  const categories: Category[] = await categoryServices.findCategories();

  res.status(200).send(categories);
}

export async function getCategoryById(req: Request, res: Response) {
  const id: number = Number(req.params.id);

  const categories: Category[] = await categoryServices.findCategoryById(id);

  res.status(200).send(categories);
}
