import { Teacher } from "@prisma/client";
import { prisma } from "../config/database";

export async function findTeacherByName(name: string) {
  const teachers: Teacher[] = await prisma.teacher.findMany({
    where: { name },
  });

  return teachers;
}
