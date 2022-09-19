import { client } from "../src/dbStrategy/postgres";

import app from "../src/app";
import supertest from "supertest";
import authFactory from "./factories/authFactory";

describe("Teste das rotas de autenticação", () => {

    const agent = supertest(app);

    it("Trying to create a user without confirm the password", async () => {

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

    /*it("Trying to create a user with wrong email format", () => {
        
    })*/

    /*it("Conflict", () => {

    })*/

    /*it("Sucess", () => {

    })*/
    
    afterAll(async () => {
        await client.$disconnect();
    })
})