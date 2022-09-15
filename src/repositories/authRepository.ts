import { prisma } from "../config/database";
import { IUser } from "../utils/sqlUserUtils";

export async function insertUser(user: IUser) {

    await prisma.user.create({ data: user });

}