import { client } from "../src/dbStrategy/postgres";

import app from "../src/app";
import supertest from "supertest";
import authFactory from "./factories/authFactory";

describe("/tests/insert", () => {

    const agent = supertest(app);

    
    /*it("Trying to create a exam without the authorization token", async () => {

    })*/
    /*it("Trying to create a exam without the name attribute", async () => {

    })*/
    /*it("Trying to create a exam without the pdfUrl attribute", async () => {

    })*/
    /*it("Trying to create a exam without the category attribute", async () => {

    })*/
    /*it("Trying to create a exam without the discipline attribute", async () => {

    })*/
    /*it("Trying to create a exam without the teacher attribute", async () => {

    })*/
    /*it("Sucess", async () => {

    })*/

    beforeEach(async () => {

        await client.$executeRaw`TRUNCATE TABLE users;`
    })

    afterAll(async () => {

        await client.$disconnect();
    })
})