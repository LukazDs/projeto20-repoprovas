import * as teachersDisciplinesRepository from "../repositories/teachersDisciplinesRepository";
import { TeachersDiscipline } from "@prisma/client";

export async function findTeachersDiscipline(disciplineId: number, teacherId: number) {

    const teachersDisciplines: TeachersDiscipline[] = await teachersDisciplinesRepository
        .findTeachersDisciplinesByName(disciplineId, teacherId);

    if (!teachersDisciplines.length) {
        throw { code: "NotFound", message: "Professor ou disciplina não vinculados!" };
    }

    return teachersDisciplines[0];
}

