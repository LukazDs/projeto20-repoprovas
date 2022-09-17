import { Request, Response } from "express";
import * as testServices from "../services/testServices";
import * as teacherServices from "../services/teacherServices";
import * as disciplineServices from "../services/disciplineServices";
import * as teachersDiscipline from "../services/teachersDisciplinesServices";
import { ITestReqBody } from "../utils/sqlTestUtils";
import { Teacher, TeachersDiscipline, Tests } from "@prisma/client";

export async function insertTest(req: Request, res: Response) {
  const test: ITestReqBody = req.body;

  await testServices.insertTest(test);

  res.status(201).send("Teste criado!");
}

export async function getTestsByDisciplineId(req: Request, res: Response) {
  const disciplineId: number = Number(req.params.disciplineId);

  await disciplineServices.findDisciplineById(disciplineId);

  const teachersDisciplines: TeachersDiscipline =
    await teachersDiscipline.findTeachersDisciplinesByDisciplineId(
      disciplineId
    );

  const teachers: Teacher = await teacherServices.findTeacherById(
    teachersDisciplines.teacherId
  );

  const tests: Tests[] = await testServices.findTestsByTeachersDisciplineId(
    teachersDisciplines.id
  );

  res.status(200).send({ tests, teachers });
}
