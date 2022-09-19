import { faker } from '@faker-js/faker';

function generateUserData(email: string, password: string){

    const user = {
        email: email,
        password: password,
        confirmedPassword: password
    }

    return user
}

function generatePassword(){

    const length: number = Math.floor(Math.random() * 20) + 10;
    const password = faker.internet.password(length);

    return password;
}

function createUserWithValidData(){

    const length: number = Math.floor(Math.random() * 20) + 10;
    const email = faker.internet.email()
    const password = faker.internet.password(length)

    const user = generateUserData(email, password)

    return user;
}

function createUserWithInvalidEmail(){

    const length: number = Math.floor(Math.random() * 20) + 10;
    const email = faker.internet.userName();
    const password = faker.internet.password(length);
    
    const user = generateUserData(email, password)

    return user;
}

function createUserWithInvalidConfirmedPassword(){
    
    const length: number = Math.floor(Math.random() * 20) + 10;
    const email = faker.internet.userName();
    const password = faker.internet.password(length);
    
    const user = generateUserData(email, password)

    user.confirmedPassword = faker.internet.password();

    return user;
}

const authFactory = {

    generatePassword,
    createUserWithValidData,
    createUserWithInvalidEmail,
    createUserWithInvalidConfirmedPassword
}

export default authFactory;
