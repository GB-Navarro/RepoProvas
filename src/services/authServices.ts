import { users } from "@prisma/client";

import authRepository from "../repositories/authRepository.js";

async function checkEmailUniquenessOrFail(email: string) {

    const result: users = await authRepository.searchEmail(email);

    if (result != null) {
        throw { code: "error_emailAlreadyInUse", message: "This e-mail has already in use by other user" };
    }
}
