import { Request, Response } from "express";

export async function findDisciplineById(req: Request, res: Response) {
  const { id } = req.params;

  const discipline = "pega disciplina";

  return discipline;
}
