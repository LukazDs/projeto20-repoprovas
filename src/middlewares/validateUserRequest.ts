import { Request, Response, NextFunction } from "express";
import { userSignInSchema } from "../schemas/userSchemas";

export async function validateSignInBody (req: Request, res: Response, next: NextFunction) {

    const validation = userSignInSchema.validate(req.body);

    if(validation.error) {

        return res.status(422).send("Formato do Email ou Password inválidos");
        
    }

    next();

};