import { Discipline } from "@prisma/client";
import { prisma } from "../config/database";

export async function findDisciplineByName(name: string) {

    const disciplines: Discipline[] = await prisma.discipline
        .findMany({ where: { name } })

    return disciplines;

}