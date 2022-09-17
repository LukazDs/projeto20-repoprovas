import "express-async-errors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser, IUserRequestBody } from "../utils/sqlUserUtils";
import * as authRepository from "../repositories/authRepository";
import { User } from "@prisma/client";

dotenv.config();

async function findUserByEmail(email: string) {
  const users: User[] = await authRepository.findUserByEmail(email);

  if (!users.length) {
    throw { code: "Unauthorized", message: "Email ou password inválido!" };
  }

  return users;
}

export async function findUser(user: IUser) {
  const users: User[] = await findUserByEmail(user.email);

  await comparePassword(user.password, users[0].password);

  return users[0];
}

export async function insertUser(user: IUserRequestBody) {
  const password: string = await encryptPassword(user.password);
  await configurePasswords(user, password);

  await findUserByEmail(user.email);

  await authRepository.insertUser(user);
}

async function comparePassword(password: string, passwordDb: string) {
  const passwordValidation: boolean = bcrypt.compareSync(password, passwordDb);

  if (!passwordValidation) {
    throw { code: "Unauthorized", message: "Email ou password incorretos!" };
  }
}

export async function getToken(user: User) {
  const JWT_PASSWORD: string = String(process.env.JWT_KEY);
  const TIME: string = String(process.env.JWT_TIME);

  const token: string = jwt.sign(user, JWT_PASSWORD, { expiresIn: TIME });

  return token;
}

async function encryptPassword(password: string) {
  const digits = Number(process.env.PASSWORD_DIGIT_BCRYPT);
  const passwordHash = bcrypt.hashSync(password, digits);

  return passwordHash;
}

async function configurePasswords(user: IUserRequestBody, password: string) {
  delete user.confirmedPassword;
  user.password = password;
}
