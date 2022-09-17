import * as disciplineRepository from "../repositories/disciplineRepository";
import { Discipline } from "@prisma/client";

export async function findDisciplineByName(name: string) {
  const disciplines: Discipline[] =
    await disciplineRepository.findDisciplineByName(name);

  if (!disciplines.length) {
    throw { code: "NotFound", message: "Disciplina não encontrada!" };
  }

  return disciplines[0];
}

export async function findDisciplineByTermId(name: string) {
  const disciplines: string = "pega disciplinas";

  if (!disciplines.length) {
    throw { code: "NotFound", message: "Disciplina não encontrada!" };
  }

  return disciplines[0];
}
