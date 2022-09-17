import { Term } from "@prisma/client";
import { Request, Response } from "express";
import * as termServices from "../services/termServices";

export async function getTerms(_req: Request, res: Response) {
  const terms: Term[] = await termServices.findTerms();

  res.status(200).send(terms);
}
