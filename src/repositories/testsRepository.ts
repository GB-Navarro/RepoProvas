import { tests as Tests } from "@prisma/client";
import { client } from "../dbStrategy/postgres.js";
import { IUnformatedTestsObtainedByTermAndDiscipline } from "../interfaces/testInterfaces.js";

async function insert(data: Omit<Tests, "id">) {

    const result = await client.tests.create({
        data: data
    })
}

async function getManyById(disciplineId: number) {
    const result: IUnformatedTestsObtainedByTermAndDiscipline[] = await client.tests.findMany({
        select: {
            name: true,
            pdfUrl: true,
            categories: {
                select: {
                    name: true
                }
            },
            teacherDiscipline: {
                select: {
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

    return result;
}

const testsRepository = {

    insert,
    getManyById
}

export default testsRepository;