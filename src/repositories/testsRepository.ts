import { tests as Tests } from "@prisma/client";
import { client } from "../dbStrategy/postgres.js";
import { IUnformatedTestsObtainedByTermAndDiscipline } from "../interfaces/testInterfaces.js";

async function insert(data: Omit<Tests, "id">) {

    const result = await client.tests.create({
        data: data
    })
}

async function getManyById() {
    const result = await client.tests.findMany({
        orderBy: [{
            teacherDiscipline: {
                disciplines: {
                    terms: {
                        number: 'asc'
                    }
                }
            }
        },{
            teacherDiscipline:{
                disciplines:{
                    id: 'asc'
                }
            }
        },{
            teacherDiscipline:{
                teacher:{
                    id: 'asc'
                }
            }
        }],
        select:{
            teacherDiscipline:{
                select:{
                    disciplines:{
                        select:{
                            terms:{
                                select:{
                                    number: true
                                }
                            },
                            name: true
                        }
                    },
                    teacher:{
                        select:{
                            name: true
                        }
                    }
                }
            },
            categories:{
                select:{
                    name: true
                }
            },
            name: true,
            pdfUrl: true,
        }
    })
    return result;
}

const testsRepository = {

    insert,
    getManyById
}

export default testsRepository;