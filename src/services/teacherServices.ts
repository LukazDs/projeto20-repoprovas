import * as teacherRepository from "../repositories/teacherRepository";
import { Teacher } from "@prisma/client";

export async function findTeacherByName(name: string) {
  const teachers: Teacher[] = await teacherRepository.findTeacherByName(name);

  if (!teachers.length) {
    throw { code: "NotFound", message: "Professor não encontrado!" };
  }

  return teachers[0];
}
