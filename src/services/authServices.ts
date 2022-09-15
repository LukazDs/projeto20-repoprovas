import "express-async-errors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";
import { IUser, IUserRequestBody } from "../utils/sqlUserUtils";
import * as authRepository from "../repositories/authRepository";
import { User } from "@prisma/client";

dotenv.config()

async function comparePassword(password: string, passwordDb: string) {

    const passwordValidation: boolean = bcrypt.compareSync(password, passwordDb);

    if(!passwordValidation) {

        throw {code: "Unauthorized", message: "Email ou password incorretos!"};
    
    }
    
}

export async function findUser(user: IUser) {

    const users: User[] = await authRepository.findUserByEmail(user.email);

    await comparePassword(user.password, users[0].password);

    return "token gerado"

   
}




