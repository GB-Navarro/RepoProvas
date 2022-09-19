import { client } from "../src/dbStrategy/postgres";

import app from "../src/app";
import supertest from "supertest";
import authFactory from "./factories/authFactory";

describe("/sign-up", () => {

    const agent = supertest(app);

    it("Trying to create a user without the confirmedPassword attribute", async () => {

        const body = authFactory.createUserWithValidData();

        delete body.confirmedPassword;

        const result = await agent.post("/sign-up").send(body);

        const status = result.status;

        expect(status).toEqual(422);
    })

    it("Trying to create a user with wrong confirmed password", async () => {

        const body = authFactory.createUserWithInvalidConfirmedPassword();

        const result = await agent.post("/sign-up").send(body);

        const status = result.status;

        expect(status).toEqual(422);
    })

    it("Trying to create a user with wrong email format", async () => {

        const body = authFactory.createUserWithInvalidEmail();

        const result = await agent.post("/sign-up").send(body);

        const status = result.status;

        expect(status).toEqual(422);
    })

    it("Conflict", async () => {

        const body = authFactory.createUserWithValidData();

        await agent.post("/sign-up").send(body);

        const result = await agent.post("/sign-up").send(body);

        const status = result.status;

        expect(status).toEqual(409);
    })

    it("Sucess", async () => {

        const body = authFactory.createUserWithValidData();

        const result = await agent.post("/sign-up").send(body);

        const status = result.status;

        expect(status).toEqual(201);
    })

    beforeEach(async () => {

        await client.$executeRaw`TRUNCATE TABLE users;`
    })

    afterAll(async () => {

        await client.$disconnect();
    })
})

describe("/sign-in", () => {

    const agent = supertest(app);

    it("Trying to login with a non-existent email", async () => {

        const body = authFactory.createUserWithValidData();

        delete body.confirmedPassword;

        const result = await agent.post("/sign-in").send(body);

        const status = result.status;

        expect(status).toEqual(401);
    })

    it("Trying to login with incorrect password", async () => {

        const body = authFactory.createUserWithValidData();

        await agent.post("/sign-up").send(body);

        delete body.confirmedPassword;

        body.password = authFactory.generatePassword();
        
        const result = await agent.post("/sign-in").send(body);
        const status = result.status;

        expect(status).toEqual(401);
    })

    /*it("Sucess", async () => {

    })*/

    beforeEach(async () => {

        await client.$executeRaw`TRUNCATE TABLE users;`
    })

    afterAll(async () => {

        await client.$disconnect();
    })
})