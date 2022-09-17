import { Teacher } from "@prisma/client";
import { Request, Response } from "express";
import * as teacherServices from "../services/teacherServices";

export async function getTeachers(_req: Request, res: Response) {
  const teachers: Teacher[] = await teacherServices.findTeachers();

  res.status(200).send(teachers);
}
