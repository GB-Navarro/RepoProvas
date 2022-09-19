import { faker } from '@faker-js/faker';

function generateExamData(name: string, pdfUrl: string, category: string, discipline: string, teacher: string) {

    const data = {
        name: name,
        pdfUrl: pdfUrl,
        category: category,
        discipline: discipline,
        teacher: teacher
    }

    return data;
}

function createExamWithValidData() {

    const name = faker.lorem.word();
    const pdfUrl = faker.internet.url();
    const category = faker.lorem.word();
    const discipline = faker.lorem.word();
    const teacher = faker.lorem.word();

    const examData = generateExamData(name, pdfUrl, category, discipline, teacher);

    return examData;
}

const examFactory = {

    createExamWithValidData
}

export default examFactory;