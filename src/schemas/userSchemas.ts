import joi from "joi";
import { IUserRequestBody } from "../utils/sqlUserUtils";

const userSignUpSchema = joi.object<IUserRequestBody>({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    confirmedPassword: joi.ref("password")
})

export { userSignUpSchema };
