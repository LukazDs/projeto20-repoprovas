import { User } from "@prisma/client";
import { prisma } from "../config/database";

export async function findUserByEmail(email: String) {

    const users: User[] = await prisma.user.findMany({ where: { email: String(email) } });

    return users;
    
}