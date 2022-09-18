import { ITestData, IUnformatedTestObtainedByTermAndDiscipline, IUnformatedTestObtainedByTeacherName } from "../interfaces/testInterfaces";
import { tests as Tests } from "@prisma/client";

import testsRepository from "../repositories/testRepository";
import teachersRepository from "../repositories/teachersRepository";
import categoriesRepository from "../repositories/categoriesRepository";
import disciplinesRepository from "../repositories/disciplinesRepository";
import teachersDisciplinesRepository from "../repositories/teachersDisciplinesRepository";

import testUtils from "../utils/testUtils";

async function insert(data: ITestData) {

    const { name, pdfUrl, category: categoryName, discipline, teacher }: ITestData = data;

    const { id: categoryId }: { id: number } = await categoriesRepository.getIdByName(categoryName);
    const { id: teacherId }: { id: number } = await teachersRepository.getIdByName(teacher);
    const { id: disciplineId }: { id: number } = await disciplinesRepository.getIdByName(discipline);
    const { id: teacherDisciplineId }: { id: number } = await teachersDisciplinesRepository.getIdByTeacherIdAndDisciplineId(teacherId, disciplineId);

    const insertData: Omit<Tests, "id"> = testUtils.generateInsertData(name, pdfUrl, categoryId, teacherDisciplineId);

    await testsRepository.insert(insertData);
}

async function getManyByTermAndDiscipline() {

    const data: IUnformatedTestObtainedByTermAndDiscipline[] = await testsRepository.getManyByTermAndDiscipline();

    return data;
}

async function getManyByTeacherName() {

    const data: IUnformatedTestObtainedByTeacherName[] = await testsRepository.getManyByTeacherName();

    return data;
}  

const testServices = {

    insert,
    getManyByTermAndDiscipline,
    getManyByTeacherName
}

export default testServices;