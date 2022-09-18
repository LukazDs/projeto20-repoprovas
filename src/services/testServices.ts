import { ITest, ITestReqBody } from "../utils/sqlTestUtils";
import * as testRepository from "../repositories/testRepository";
import * as teacherServices from "../services/teacherServices";
import * as categoryServices from "../services/categoryServices";
import * as disciplineServices from "../services/disciplineServices";
import * as teachersDisciplinesServices from "../services/teachersDisciplinesServices";
import { Tests } from "@prisma/client";

export async function insertTest(test: ITestReqBody) {
  const { id: categoryId } = await categoryServices.findCategoryByName(
    test.category
  );

  const { id: teacherId } = await teacherServices.findTeacherByName(
    test.teacher
  );

  const { id: disciplineId } = await disciplineServices.findDisciplineByName(
    test.displine
  );

  const { id: teachersDisciplineId } =
    await teachersDisciplinesServices.findTeachersDiscipline(
      disciplineId,
      teacherId
    );

  const { name, pdfUrl } = test;

  const payload: ITest = { name, pdfUrl, categoryId, teachersDisciplineId };

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
