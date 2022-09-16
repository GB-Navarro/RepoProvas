
function comparePasswordsOrFail(firstPassword: string, secondPassword: string): void {

    if (firstPassword != secondPassword) {
        throw { code: "error_thePasswordsAreNotEqual", message: "This passwords are not equal!" };
    }
}

const authUtils = {

    comparePasswordsOrFail
}

export default authUtils