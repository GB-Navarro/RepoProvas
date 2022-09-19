import { faker } from '@faker-js/faker';

function generateUserData(email: string, password: string){

    const user = {
        email: email,
        password: password,
        confirmedPassword: password
    }

    return user
}

function createUserWithValidData(){

    const email = faker.internet.email()
    const password = faker.internet.password(10)

    const user = generateUserData(email, password)

    return user;
}

function createUserWithInvalidEmail(){

    const email = faker.internet.userName();
    const password = faker.internet.password();
    
    const user = generateUserData(email, password)

    return user;
}

function createUserWithInvalidConfirmedPassword(){
    
    const email = faker.internet.userName();
    const password = faker.internet.password();
    
    const user = generateUserData(email, password)

    user.confirmedPassword = faker.internet.password();

    return user;

}

const authFactory = {

    createUserWithValidData,
    createUserWithInvalidEmail,
    createUserWithInvalidConfirmedPassword
}

export default authFactory;
