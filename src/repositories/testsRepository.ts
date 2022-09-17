import { tests as Tests } from "@prisma/client";
import { client } from "../dbStrategy/postgres.js";
import { IUnformatedTestObtainedByTermAndDiscipline, IUnformatedTestObtainedByTeacherName } from "../interfaces/testInterfaces.js";

async function insert(data: Omit<Tests, "id">) {

    const result = await client.tests.create({
        data: data
    })
}

async function getManyByTermAndDiscipline() {
    const result: IUnformatedTestObtainedByTermAndDiscipline[] = await client.tests.findMany({
        orderBy: [{
            teacherDiscipline: {
                disciplines: {
                    terms: {
                        number: 'asc'
                    }
                }
            }
        }, {
            teacherDiscipline: {
                disciplines: {
                    id: 'asc'
                }
            }
        }, {
            teacherDiscipline: {
                teacher: {
                    id: 'asc'
                }
            }
        }],
        select: {
            teacherDiscipline: {
                select: {
                    disciplines: {
                        select: {
                            terms: {
                                select: {
                                    number: true
                                }
                            },
                            name: true
                        }
                    },
                    teacher: {
                        select: {
                            name: true
                        }
                    }
                }
            },
            categories: {
                select: {
                    name: true
                }
            },
            name: true,
            pdfUrl: true,
        }
    })
    return result;
}

async function getManyByTeacherName() {

    const result: IUnformatedTestObtainedByTeacherName[] = await client.tests.findMany({
        orderBy: [{
            teacherDiscipline: {
                teacher: {
                    id: 'asc'
                }
            }
        }, {
            categories: {
                id: 'asc'
            }
        }],
        select: {
            teacherDiscipline: {
                select: {
                    teacher: {
                        select: {
                            name: true
                        }
                    },
                    disciplines: {
                        select: {
                            name: true
                        }
                    }
                }
            },
            categories: {
                select: {
                    name: true
                }
            },
            name: true
        }
    })

    return result
}

const testsRepository = {

    insert,
    getManyByTermAndDiscipline,
    getManyByTeacherName
}

export default testsRepository;