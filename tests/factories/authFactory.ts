import { faker } from '@faker-js/faker';

function createUserWithValidData(){

    const email = faker.internet.email()
    const password = faker.internet.password(10)

    const user = {
        email: email,
        password: password,
        confirmedPassword: password
    }

    return user;
}

function createUserWithInvalidEmail(){

    const email = faker.internet.userName();
    const password = faker.internet.password();
    
    const user = {
        email: email,
        password: password,
        confirmedPassword: password
    }

    return user;
}

const authFactory = {

    createUserWithValidData,
    createUserWithInvalidEmail
}

export default authFactory;
