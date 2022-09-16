import { ITest, ITestReqBody } from "../utils/sqlTestUtils";
import * as testRepository from "../repositories/testRepository";
import * as teacherServices from "../services/teacherServices";
import * as categoryServices from "../services/categoryServices";
import * as disciplineServices from "../services/disciplineServices";
import * as teachersDisciplinesServices from "../services/teachersDisciplinesServices";

export async function insertTest(test: ITestReqBody) {

    const { id: categoryId } = await categoryServices.findCategoryByName(test.category);
    const { id: teacherId } = await teacherServices.findTeacherByName(test.teacher);
    const { id: disciplineId } = await disciplineServices.findDisciplineByName(test.displine);
    const { id: teachersDisciplineId } = await teachersDisciplinesServices.findTeachersDiscipline(disciplineId, teacherId);

    const { name, pdfUrl } = test;

    const payload: ITest = { name, pdfUrl, categoryId, teachersDisciplineId }

    await testRepository.insertTest(payload);

}