import { ITest, ITestReqBody } from "../utils/sqlTestUtils";
import * as testRepository from "../repositories/testRepository";
import * as teacherServices from "../services/teacherServices";
import * as categoryServices from "../services/categoryServices";
import * as disciplineServices from "../services/disciplineServices";
import * as teachersDisciplinesServices from "../services/teachersDisciplinesServices";
import { Tests } from "@prisma/client";

export async function insertTest(test: ITestReqBody) {
  await categoryServices.findCategoryById(test.categoryId);
  await teacherServices.findTeacherById(test.teacherId);
  await disciplineServices.findDisciplineById(test.disciplineId);

  const { id: teachersDisciplineId } =
    await teachersDisciplinesServices.findTeachersDiscipline(
      test.disciplineId,
      test.teacherId
    );

  const { name, pdfUrl, categoryId } = test;

  const payload: ITest = {
    name,
    pdfUrl,
    categoryId,
    teachersDisciplineId,
  };

  await testRepository.insertTest(payload);
}

export async function findTestsByTeachersDisciplineId(
  teachersDisciplineId: number
) {
  const tests: Tests[] = await testRepository.findTestsByTeachersDisciplineId(
    teachersDisciplineId
  );

  const testsWithCategorieName = [];

  for (let i = 0; i < tests.length; i++) {
    testsWithCategorieName.push({
      id: tests[i].id,
      name: tests[i].name,
      pdfUrl: tests[i].pdfUrl,
      categoryName: await categoryServices.findCategoryById(
        tests[i].categoryId
      ),
      teachersDisciplineId: tests[i].teachersDisciplineId,
    });
  }

  return testsWithCategorieName;
}
