import { TeachersDiscipline } from "@prisma/client";
import { prisma } from "../config/database";

export async function findTeachersDisciplinesByName(disciplineId: number, teacherId: number) {

    const teachersDisciplines: TeachersDiscipline[] = await prisma.teachersDiscipline
        .findMany({ where: { teacherId, disciplineId } })

    return teachersDisciplines;

}