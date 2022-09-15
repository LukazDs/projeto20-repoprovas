import joi from "joi";
import { IUser } from "../utils/sqlUserUtils";

const userSignInSchema = joi.object<IUser>({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
})

export { userSignInSchema };
