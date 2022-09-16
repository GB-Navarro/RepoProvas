import { tests as Tests } from "@prisma/client";
import { client } from "../dbStrategy/postgres.js";

async function insert(data: Omit<Tests, "id">){

    const result = await client.tests.create({
        data: data
    })
}

const testsRepository = {

    insert
}

export default testsRepository;