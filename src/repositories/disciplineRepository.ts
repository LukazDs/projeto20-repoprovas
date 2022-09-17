import { Discipline } from "@prisma/client";
import { prisma } from "../config/database";

export async function findDisciplineByName(name: string) {
  const disciplines: Discipline[] = await prisma.discipline.findMany({
    where: { name },
  });

  return disciplines;
}

export async function findDisciplineByTermId(termId: number) {
  const disciplines: Discipline[] = await prisma.discipline.findMany({
    where: { termId },
  });

  return disciplines;
}

export async function findDisciplineById(id: number) {
  const disciplines: Discipline[] = await prisma.discipline.findMany({
    where: { id },
  });

  return disciplines;
}
