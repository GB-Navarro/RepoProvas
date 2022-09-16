import { users } from "@prisma/client";

export type ISignUpData = {
    email: string,
    password: string,
    confirmedPassword: string
}

export type IUserData = Omit<users, "id">

export type UserPassword = Omit<users, "id" | "email">

export type UserId = Omit<users, "email" | "password">