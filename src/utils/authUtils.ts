import bcrypt from "bcrypt";

function comparePasswordsOrFail(firstPassword: string, secondPassword: string): void {

    if (firstPassword != secondPassword) {
        throw { code: "error_thePasswordsAreNotEqual", message: "This passwords are not equal!" };
    }
}

function encryptPassword(password: string): string {

    const encryptedPassword: string = bcrypt.hashSync(password, 10);

    return encryptedPassword;
}

const authUtils = {

    comparePasswordsOrFail,
    encryptPassword
}

export default authUtils