import { users } from "@prisma/client";
import { ISignUpData, IUserData } from "../interfaces/AuthInterfaces.js";

import authRepository from "../repositories/authRepository.js";
import authUtils from "../utils/authUtils.js";

async function checkEmailUniquenessOrFail(email: string) {

    const result: users = await authRepository.searchEmail(email);

    if (result != null) {
        throw { code: "error_emailAlreadyInUse", message: "This e-mail has already in use by other user" };
    }
}

async function createUser(data: ISignUpData) {

    const { email, password, confirmedPassword }: ISignUpData = data;

    authUtils.comparePasswordsOrFail(password, confirmedPassword);

    await checkEmailUniquenessOrFail(email);

    const encryptedPassword: string = authUtils.encryptPassword(password);

    const registrationData: IUserData = authUtils.generateRegistrationData(email, encryptedPassword);

    await authRepository.insertUser(registrationData);
}

async function getUserDataOrFail(email: string) {

    const result: users = await authRepository.searchEmail(email);

    if (result === null) {
        throw { code: "error_thisEmailIsNotRegistered", message: "This e-mail is not registered!" };
    }

    return result
}

const authServices = {

    createUser
}

export default authServices;