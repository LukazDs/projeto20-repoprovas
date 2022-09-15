import { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {

    const user: IUser = req.body;

    //services

    res.status(201).send("User Created!");

}