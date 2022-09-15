import { User } from "@prisma/client";

export type IUser = Omit<User, "id">;
export type IUserRequestBody<IUser> = IUser & { confirmedPassword: string }; 
