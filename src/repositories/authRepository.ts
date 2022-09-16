import { client } from "../dbStrategy/postgres.js";
import { users } from "@prisma/client";
import { IUserData } from "../interfaces/AuthInterfaces.js";
 
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

const authRepository = {

    searchEmail,
    insertUser
}

export default authRepository;