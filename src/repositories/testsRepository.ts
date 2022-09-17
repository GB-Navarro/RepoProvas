import { tests as Tests } from "@prisma/client";
import { client } from "../dbStrategy/postgres.js";

async function insert(data: Omit<Tests, "id">) {

    const result = await client.tests.create({
        data: data
    })
}

async function getManyById(disciplineId: number) {
    const result = await client.tests.findMany({
        where: {
            id: disciplineId
        },
        include: {
            categories: {
                select: {
                    name: true
                }
            },
            teacherDiscipline: {
                include: {
                    teacher: {
                        select: {
                            name: true
                        }
                    },
                    disciplines: {
                        select: {
                            name: true,
                            terms: {
                                select: {
                                    number: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}

const testsRepository = {

    insert,
    getManyById
}

export default testsRepository;