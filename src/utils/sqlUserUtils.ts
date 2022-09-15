import { User } from "@prisma/client";

export type IUser = Omit<User, "id">;

export type IUserRequestBody = {
    email: string;
    password: string;
    confirmedPassword?: string;
}