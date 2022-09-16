import { Request, Response, NextFunction } from "express";
import { testSchema } from "../schemas/testSchemas";

export async function validateTestBody (req: Request, res: Response, next: NextFunction) {

    const validation = testSchema.validate(req.body);

    if(validation.error) {

        return res.status(422).send("Formato da prova inválido!");
        
    }

    next();

}
