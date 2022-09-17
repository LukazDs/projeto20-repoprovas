import joi from "joi";
import { IUser, IUserRequestBody } from "../utils/sqlUserUtils";

const userSignInSchema = joi.object<IUser>({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

const userSignUpSchema = joi.object<IUserRequestBody>({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  confirmedPassword: joi.ref("password"),
});

export { userSignUpSchema, userSignInSchema };
