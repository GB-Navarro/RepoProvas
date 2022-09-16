import { ITestData } from "../interfaces/testInterfaces.js";

async function insert(data: ITestData){

    const { name, pdfUrl, category, discipline, teacher}: ITestData = data;

    //const categoryId: number =  await testRepository.getCategoryIdByName(category);
    //const teacherId: number =  await testRepository.getTeacherIdByName(teacher);
    //const disciplineId: number =  await testRepository.getDisciplineIdByName(discipline);
    //const teacherDisciplineId: number =  await testRepository.getTeacherDisciplineId(teacherId, disciplineId);

    //const insertData: Tests = testUtils.generateInsertData(name, pdfUrl, categoryId, teacherDisciplineId);

    //await testRepository.insert(inserData);
}

const testServices = {

    insert
}

export default testServices;