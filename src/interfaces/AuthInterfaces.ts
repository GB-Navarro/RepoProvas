import { users } from "@prisma/client";

export type ISignInData = {
    email: string,
    passwod: string,
    confirmedPasswod: string
}

export type IUserData = Omit<users, "id">