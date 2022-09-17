export type ITestData = {
    name: string,
    pdfUrl: string,
    category: string,
    discipline: string,
    teacher: string
}

export type IUnformatedTestsObtainedByTermAndDiscipline = {
    name: string,
    pdfUrl: string,
    categories:{
        name: string
    },
    teacherDiscipline:{
        teacher:{
            name: string
        },
        disciplines:{
            name: string,
            terms:{
                number: number
            }
        }
    }
}