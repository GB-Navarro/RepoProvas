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

    const nameLength: number = Math.floor(Math.random() * 11) + 4;
    const categoryNumber: number = Math.floor(Math.random() * 3);
    const teacherNumber: number = Math.floor(Math.random() * 2);

    const categories = ['Projeto', 'Prática', 'Recuperação'];
    const teachers = ['Diego Pinho', 'Bruna Hamori'];
    const disciplines = ["HTML e CSS","JavaScript","React", "Humildade","Planejamento","Autoconfiança"];

    const name: string = faker.lorem.word(nameLength);
    const pdfUrl: string = faker.internet.url();
    const category: string = categories[categoryNumber];
    const teacher: string = teachers[teacherNumber];
    
    let discipline:string;

    if(teachers[teacherNumber] === 'Diego Pinho'){
        const disciplineNumber: number = Math.floor(Math.random() * 3);
        discipline = disciplines[disciplineNumber];
    }else{
        const disciplineNumber: number = Math.floor(Math.random() * 3) + 3;
        discipline = disciplines[disciplineNumber];
    }

    const examData = generateExamData(name, pdfUrl, category, discipline, teacher);

    return examData;
}

const examFactory = {

    createExamWithValidData
}

export default examFactory;