import { Request, Response } from "express";
import * as disciplineServices from "../services/disciplineServices";
import * as teachersDiscipline from "../services/teachersDisciplinesServices";
import * as teacherServices from "../services/teacherServices";
import { TeachersDiscipline } from "@prisma/client";

export async function getTeachersDisciplinesByDisciplineId(
  req: Request,
  res: Response
) {
  const disciplineId: number = Number(req.params.disciplineId);

  await disciplineServices.findDisciplineById(disciplineId);

  const teachersDisciplines =
    await teachersDiscipline.findTeachersDisciplinesByDisciplineId(
      disciplineId
    );

  res.status(200).send(teachersDisciplines);
}

export async function getTeachersDisciplinesByTeacherId(
  req: Request,
  res: Response
) {
  const teacherId: number = Number(req.params.teacherId);

  await teacherServices.findTeacherById(teacherId);

  const teachersDisciplines =
    await teachersDiscipline.findTeachersDisciplinesByTeacherId(teacherId);

  res.status(200).send(teachersDisciplines);
}
