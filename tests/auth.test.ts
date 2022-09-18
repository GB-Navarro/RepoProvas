import { client } from "../src/dbStrategy/postgres";

import app from "../src/app";
import supertest from "supertest";
import authFactory from "./factories/authFactory";

describe("Teste das rotas de autenticação", () => {

    it("Trying to create a user without confirm the password", async () => {

        const body = authFactory.createUser();

        delete body.confirmedPassword

        const result = await supertest(app).post("/sign-up").send(body);

        const status = result.status

        console.log("Body enviado => ", body);

        expect(status).toEqual(422);
    })

    /*it("Trying to create a user with wrong data format", () => {

    })*/

    /*it("Conflict case", () => {

    })*/

    afterAll(async () => {
        await client.$disconnect();
    })
})