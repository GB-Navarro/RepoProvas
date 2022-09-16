import { tests as Tests } from "@prisma/client";

function generateInsertData(name: string, pdfUrl: string, categoryId: number, teacherDisciplineId: number) {

    const insertData: Omit<Tests, "id"> = {
        name: name,
        pdfUrl: pdfUrl,
        categoryId: categoryId,
        teacherDisciplineId: teacherDisciplineId
    }

    return insertData;
}

const testUtils = {

    generateInsertData
}