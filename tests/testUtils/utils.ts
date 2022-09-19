import authFactory from "../factories/authFactory";
import supertest from "supertest";
import app from "../../src/app";

async function createUser() {

    const body = authFactory.createUserWithValidData();

    await supertest(app).post("/sign-up").send(body);

    delete body.confirmedPassword;

    const result = await supertest(app).post("/sign-in").send(body);

    const token = result.body

    const data = {

        user: body,
        token: token
    }

    return data
}

const utils = {

    createUser
}

export default utils;