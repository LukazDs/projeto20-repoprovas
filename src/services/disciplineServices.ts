import * as disciplineRepository from "../repositories/disciplineRepository";
import { Discipline } from "@prisma/client";

export async function findDisciplines() {
  const disciplines: Discipline[] =
    await disciplineRepository.findDisciplines();

  return disciplines;
}

export async function findDisciplineByName(name: string) {
  const disciplines: Discipline[] =
    await disciplineRepository.findDisciplineByName(name);

  if (!disciplines.length) {
    throw { code: "NotFound", message: "Disciplina não encontrada!" };
  }

  return disciplines[0];
}

export async function findDisciplineByTermId(termId: number) {
  const disciplines: Discipline[] =
    await disciplineRepository.findDisciplineByTermId(termId);

  if (!disciplines.length) {
    throw { code: "NotFound", message: "Disciplina não encontrada!" };
  }

  return disciplines;
}

export async function findDisciplineById(id: number) {
  const disciplines: Discipline[] =
    await disciplineRepository.findDisciplineById(id);

  if (!disciplines.length) {
    throw { code: "NotFound", message: "Disciplina não encontrada!" };
  }

  return disciplines;
}
