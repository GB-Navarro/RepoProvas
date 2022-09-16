import { client } from "../dbStrategy/postgres.js";
import { users } from "@prisma/client";
import { IUserData, UserPassword } from "../interfaces/AuthInterfaces.js";
 
async function searchEmail(email: string) {

    const result: users = await client.users.findUnique({
        where: {
            email: email
        }
    })

    return result;
}

async function insertUser(data: IUserData) {

    await client.users.create({
        data: data
    })
}

async function getPasswordByEmail(email: string) {

    const result: UserPassword = await client.users.findUnique({
        where: {
            email: email
        },
        select: {
            password: true
        }
    })

    return result.password;
}

const authRepository = {

    searchEmail,
    insertUser,
    getPasswordByEmail
}

export default authRepository;