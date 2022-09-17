import { Term } from "@prisma/client";
import { prisma } from "../config/database";

export async function findTerms() {
  const terms: Term[] = await prisma.term.findMany();

  return terms;
}
