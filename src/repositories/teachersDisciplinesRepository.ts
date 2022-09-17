import { TeachersDiscipline } from "@prisma/client";
import { prisma } from "../config/database";

export async function findTeachersDisciplines(
  disciplineId: number,
  teacherId: number
) {
  const teachersDisciplines: TeachersDiscipline[] =
    await prisma.teachersDiscipline.findMany({
      where: { teacherId, disciplineId },
    });

  return teachersDisciplines;
}

export async function findTeachersDisciplinesByDisciplineId(
  disciplineId: number
) {
  const teachersDisciplines: TeachersDiscipline[] =
    await prisma.teachersDiscipline.findMany({
      where: { disciplineId },
    });

  return teachersDisciplines;
}
