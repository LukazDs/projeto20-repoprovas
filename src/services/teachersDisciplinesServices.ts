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

  await checkArrayLength(teachersDisciplines);

  return teachersDisciplines[0];
}

export async function findTeachersDisciplinesByDisciplineId(
  disciplineId: number
) {
  const teachersDisciplines: TeachersDiscipline[] =
    await teachersDisciplinesRepository.findTeachersDisciplinesByDisciplineId(
      disciplineId
    );

  await checkArrayLength(teachersDisciplines);

  return teachersDisciplines;
}

export async function findTeachersDisciplinesByTeacherId(teacherId: number) {
  const teachersDisciplines: TeachersDiscipline[] =
    await teachersDisciplinesRepository.findTeachersDisciplinesByTeacherId(
      teacherId
    );

  await checkArrayLength(teachersDisciplines);

  return teachersDisciplines;
}

async function checkArrayLength(arr: TeachersDiscipline[]) {
  if (!arr.length) {
    throw {
      code: "NotFound",
      message: "Professor ou disciplina não vinculados!",
    };
  }
}
