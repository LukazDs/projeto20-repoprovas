import joi from "joi";
import { IUserRequestBody } from "../utils/sqlUserUtils";

const userSchema = joi.object<IUserRequestBody>({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    confirmedPassword: joi.ref("password")
})

export default userSchema;
