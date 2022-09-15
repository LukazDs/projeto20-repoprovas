import { Request, Response, NextFunction } from "express";
import { userSignInSchema, userSignUpSchema } from "../schemas/userSchemas";

export async function validateSignInBody (req: Request, res: Response, next: NextFunction) {

    const validation = userSignInSchema.validate(req.body);

    if(validation.error) {

        return res.status(422).send("Formato do Email ou Password inválidos");
        
    }

    next();

}

export async function validateSignUpBody(req: Request, res: Response, next: NextFunction) {

    const validation = userSignUpSchema.validate(req.body);

    if (validation.error) {

        return res.status(422).send("Formato do corpo da Requisição inválido!");

    }

    next();
    
}
