import { users } from "@prisma/client";

export type ISignUpData = {
    email: string,
    passwod: string,
    confirmedPasswod: string
}

export type IUserData = Omit<users, "id">