import { Tests } from "@prisma/client";
import { Request, Response } from "express";
import * as testServices from "../services/testServices";

import { ITestReqBody } from "../utils/sqlTestUtils";

export async function insertTest(req: Request, res: Response) {
  const test: ITestReqBody = req.body;

  await testServices.insertTest(test);

  res.status(201).send("Teste criado!");
}

export async function getTestByTeachersDisciplineId(
  req: Request,
  res: Response
) {
  const id: number = Number(req.params.id);

  const tests: Tests[] = await testServices.findTestsByTeachersDisciplineId(id);

  res.status(200).send(tests);
}
