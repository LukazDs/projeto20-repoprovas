import { Teacher } from "@prisma/client";
import { prisma } from "../config/database";

export async function findTeachers() {
  const teachers: Teacher[] = await prisma.teacher.findMany();

  return teachers;
}

export async function findTeacherByName(name: string) {
  const teachers: Teacher[] = await prisma.teacher.findMany({
    where: { name },
  });

  return teachers;
}

export async function findTeacherById(id: number) {
  const teachers: Teacher[] = await prisma.teacher.findMany({ where: { id } });

  return teachers;
}
