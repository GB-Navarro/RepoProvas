import { faker } from '@faker-js/faker';

function createUser(){

    const email = faker.internet.email()
    const password = faker.internet.password(10)

    const user = {
        email: email,
        password: password,
        confirmedPassword: password
    }

    return user;
}

const authFactory = {

    createUser
}

export default authFactory;
