import { User } from "@prisma/client";
import { prisma } from "../config/database";
import { IUser } from "../utils/sqlUserUtils";

export async function insertUser(user: IUser) {

    await prisma.user.create({ data: user });

}

export async function findUserByEmail(email: String) {

    const users: User[] = await prisma.user.findMany({ where: { email: String(email) } });

    return users;
    
}
