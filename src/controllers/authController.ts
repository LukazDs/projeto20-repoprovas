import { Request, Response } from "express";
import * as authServices from "../services/authServices";
import { IUser } from "../utils/sqlUserUtils";

export async function loginUser(req: Request, res: Response) {

    const user: IUser = req.body;
    
    const token = await authServices.findUser(user);

    res.status(201).send(token);

}
