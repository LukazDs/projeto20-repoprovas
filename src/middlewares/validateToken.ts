import { Request, Response, NextFunction } from "express";
import jwt from "../token/jwt";

export async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  const token: string = String(authorization?.replace("Bearer ", ""));

  if (!token) {
    return res.status(400).send("Token Vazio!");
  }

  const verified = jwt.verifyToken(token);

  if (!verified) {
    return res.status(401).send("Token Inválido!");
  }

  res.locals.verified = verified;

  next();
}
