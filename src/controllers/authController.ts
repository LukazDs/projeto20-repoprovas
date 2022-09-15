import { Request, Response } from "express";
import * as authServices from "../services/authServices";
import { IUser, IUserRequestBody } from "../utils/sqlUserUtils";

export async function loginUser(req: Request, res: Response) {

    const user: IUser = req.body;
    
    const token = await authServices.findUser(user);

    res.status(201).send(token);

}

export async function registerUser(req: Request, res: Response) {

    const user: IUserRequestBody = req.body;
    
    await authServices.insertUser(user);

    res.status(201).send("Usuário cadastrado!");

}
