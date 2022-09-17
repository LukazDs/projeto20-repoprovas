import { prisma } from "../config/database";
import { ITest } from "../utils/sqlTestUtils";

export async function insertTest(test: ITest) {
  await prisma.tests.create({ data: test });
}

export async function findTestsByTeachersDisciplineId(
  teachersDisciplineId: number
) {
  const teachersDisciplines = await prisma.tests.findMany({
    where: { teachersDisciplineId },
  });

  return teachersDisciplines;
}
