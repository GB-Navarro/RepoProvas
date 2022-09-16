import { client } from "../dbStrategy/postgres.js";
import { users } from "@prisma/client";
 
async function searchEmail(email: string) {

    const result: users = await client.users.findUnique({
        where: {
            email: email
        }
    })

    return result;
}

const authRepository = {

    searchEmail
}

export default authRepository;