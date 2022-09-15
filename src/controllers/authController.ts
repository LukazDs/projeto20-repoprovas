import { Request, Response } from "express";
import * as authServices from "../services/authServices"
import { IUserRequestBody } from "../utils/sqlUserUtils";

export async function registerUser(req: Request, res: Response) {

    const user: IUserRequestBody = req.body;
    
    await authServices.insertUser(user)

    res.status(201).send("Usuário cadastrado!");

}