export type ITestData = {
    name: string,
    pdfUrl: string,
    category: string,
    discipline: string,
    teacher: string
}

export type IUnformatedTestObtainedByTermAndDiscipline = {
    teacherDiscipline: {
        disciplines: {
            terms: {
                number: number
            },
            name: string
        },
        teacher: {
            name: string
        }
    }, categories: {
        name: string
    },
    name: string,
    pdfUrl: string
}

export type IUnformatedTestObtainedByTeacherName = {
    teacherDiscipline:{
        teacher:{
            name: string
        },
        disciplines:{
            name: string
        }
    },
    categories:{
        name:string
    },
    name: string
}