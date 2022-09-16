import { users } from "@prisma/client";

export type ISignUpData = {
    email: string,
    password: string,
    confirmedPassword: string
}

export type IUserData = Omit<users, "id">