import app from "../src/app";
import supertest from "supertest";

describe("Teste das rotas de autenticação", () => {
    it("Trying to create a user with wrong data format", async () => {
        const body = {

        }

        const result = await supertest(app).post("/sign-up").send(body);
        const status = result.status

        expect(status).toEqual(404);
    })
    /*it("Trying to create a user with wrong data format", () => {

    })*/
    /*it("Conflict case", () => {

    })*/
})