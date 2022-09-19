import { client } from "../src/dbStrategy/postgres";

import app from "../src/app";
import supertest from "supertest";
import utils from "./testUtils/utils";
import examFactory from "./factories/examFactory";

describe("/tests/insert", () => {

    const agent = supertest(app);

    it("Trying to create a exam without the authorization token", async () => {

        const body = examFactory.createExamWithValidData();

        const result = await agent.post("/tests/insert").send(body);
        const status = result.status;

        expect(status).toEqual(401);
    })
    it("Trying to create a exam without the name attribute", async () => {

        const body = examFactory.createExamWithValidData();
        const token = await utils.getToken();

        delete body.name;

        const result = await agent.post("/tests/insert").set('Authorization', token).send(body);
        const status = result.status;

        expect(status).toEqual(422);
    })
    it("Trying to create a exam without the pdfUrl attribute", async () => {

        const body = examFactory.createExamWithValidData();
        const token = await utils.getToken();

        delete body.pdfUrl;

        const result = await agent.post("/tests/insert").set('Authorization', token).send(body);
        const status = result.status;

        expect(status).toEqual(422);
    })
    it("Trying to create a exam without the category attribute", async () => {

        const body = examFactory.createExamWithValidData();
        const token = await utils.getToken();

        delete body.category;

        const result = await agent.post("/tests/insert").set('Authorization', token).send(body);
        const status = result.status;

        expect(status).toEqual(422);
    })
    it("Trying to create a exam without the discipline attribute", async () => {

        const body = examFactory.createExamWithValidData();
        const token = await utils.getToken();

        delete body.discipline;

        const result = await agent.post("/tests/insert").set('Authorization', token).send(body);
        const status = result.status;

        expect(status).toEqual(422);
    })
    it("Trying to create a exam without the teacher attribute", async () => {

        const body = examFactory.createExamWithValidData();
        const token = await utils.getToken();

        delete body.teacher;

        const result = await agent.post("/tests/insert").set('Authorization', token).send(body);
        const status = result.status;

        expect(status).toEqual(422);
    })
    it("Sucess", async () => {

        const body = examFactory.createExamWithValidData();
        const token = await utils.getToken();

        const result = await agent.post("/tests/insert").set('Authorization', token).send(body);
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