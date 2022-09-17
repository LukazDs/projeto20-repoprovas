import * as teacherRepository from "../repositories/teacherRepository";
import { Teacher } from "@prisma/client";

export async function findTeacherByName(name: string) {
  const teachers: Teacher[] = await teacherRepository.findTeacherByName(name);

  await checkArrayLength(teachers);

  return teachers[0];
}

export async function findTeacherById(id: number) {
  const teachers: Teacher[] = await teacherRepository.findTeacherById(id);

  await checkArrayLength(teachers);

  return teachers[0];
}

async function checkArrayLength(arr: Teacher[]) {
  if (!arr.length) {
    throw { code: "NotFound", message: "Professor não encontrado!" };
  }
}
