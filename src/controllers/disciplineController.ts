import { Request, Response } from "express";
import * as disciplineServices from "../services/disciplineServices";

export async function findDisciplineByTermId(req: Request, res: Response) {
  const termId: number = Number(req.params.termId);
  const disciplines = await disciplineServices.findDisciplineByTermId(termId);

  res.status(200).send(disciplines);
}
