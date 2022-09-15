import "express-async-errors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";
import { IUser, IUserRequestBody } from "../utils/sqlUserUtils";
import * as authRepository from "../repositories/authRepository";
import { User } from "@prisma/client";

dotenv.config()

async function encryptPassword(password: string) {

    const digits = Number(process.env.PASSWORD_DIGIT_BCRYPT);
    const passwordHash = bcrypt.hashSync(password, digits);

    return passwordHash;
}

async function configurePasswords(user: IUserRequestBody, password: string) {
    
    delete user.confirmedPassword;
    user.password = password;

}

export async function insertUser(user: IUserRequestBody) {

    const password: string = await encryptPassword(user.password);
    await configurePasswords(user, password)

    await authRepository.insertUser(user);

}