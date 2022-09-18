import { Request, Response } from "express";
import * as disciplineServices from "../services/disciplineServices";
import * as teachersDiscipline from "../services/teachersDisciplinesServices";
import { TeachersDiscipline } from "@prisma/client";

export async function getTeachersDisciplinesByDisciplineId(
  req: Request,
  res: Response
) {
  const disciplineId: number = Number(req.params.disciplineId);

  await disciplineServices.findDisciplineById(disciplineId);

  const teachersDisciplines: TeachersDiscipline[] =
    await teachersDiscipline.findTeachersDisciplinesByDisciplineId(
      disciplineId
    );

  res.status(200).send(teachersDisciplines);
}
