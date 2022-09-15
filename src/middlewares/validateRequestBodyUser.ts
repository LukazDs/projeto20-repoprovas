import { Request, Response, NextFunction } from "express";
import userSchema from "../schemas/userSchemas";

export async function validateUserRequestBody (req: Request, res: Response, next: NextFunction) {

    const validation = userSchema.validate(req.body)

    if(validation.error) {

        return res.status(422).send("Email ou password inválidos!")
        
    }

    next()

};