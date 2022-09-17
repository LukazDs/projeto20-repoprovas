import * as teachersDisciplinesRepository from "../repositories/teachersDisciplinesRepository";
import { TeachersDiscipline } from "@prisma/client";

export async function findTeachersDiscipline(
  disciplineId: number,
  teacherId: number
) {
  const teachersDisciplines: TeachersDiscipline[] =
    await teachersDisciplinesRepository.findTeachersDisciplines(
      disciplineId,
      teacherId
    );

  if (!teachersDisciplines.length) {
    throw {
      code: "NotFound",
      message: "Professor ou disciplina não vinculados!",
    };
  }

  return teachersDisciplines[0];
}

export async function findTeachersDisciplinesByDisciplineId(
  disciplineId: number
) {
  const teachersDisciplines: TeachersDiscipline =
    await teachersDisciplinesRepository.findTeachersDisciplinesByDisciplineId(
      disciplineId
    );

  return teachersDisciplines;
}
