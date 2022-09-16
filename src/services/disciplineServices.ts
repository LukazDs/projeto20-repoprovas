import * as disciplineRepository from "../repositories/disciplineRepository";
import { Discipline } from "@prisma/client";

export async function findDisciplineByName(name: string) {

    const disciplines: Discipline[] = await disciplineRepository
        .findDisciplineByName(name);

    if (!disciplines.length) {
        throw { code: "NotFound", message: "Disciplina não encontrada!" };
    }

    return disciplines[0];
}