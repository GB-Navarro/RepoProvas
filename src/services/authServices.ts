import { users } from "@prisma/client";
import { ISignUpData, IUserData } from "../interfaces/authInterfaces";

import authRepository from "../repositories/authRepository";
import authUtils from "../utils/authUtils";

import bcrypt from "bcrypt";

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

async function comparePasswordsOrFail(data: IUserData) {

    const { email, password } = data;

    const realPassword: string = await authRepository.getPasswordByEmail(email);

    const isEqual: boolean = bcrypt.compareSync(password.toString(), realPassword.toString());

    if (!(isEqual)) {
        throw { code: "error_wrongPassword", message: "Wrong password!" };
    }
}

async function login(data: IUserData) {

    const { email } = data;

    const { id } = await getUserDataOrFail(email);

    await comparePasswordsOrFail(data);

    const token: string = authUtils.generateToken(id);

    return token;
}

const authServices = {

    createUser,
    login
}

export default authServices;