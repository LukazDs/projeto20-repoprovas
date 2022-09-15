import { Request, Response, NextFunction } from "express";
import { userSignUpSchema } from "../schemas/userSchemas";

export async function validateSignUpBody(req: Request, res: Response, next: NextFunction) {

    const validation = userSignUpSchema.validate(req.body)

    if (validation.error) {

        return res.status(422).send("Email ou password inválidos!")

    }

    next()

};