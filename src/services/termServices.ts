import * as termRepository from "../repositories/termRepository";
import { Term } from "@prisma/client";

export async function findTerms() {
  const terms: Term[] = await termRepository.findTerms();

  return terms;
}
