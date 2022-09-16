import { ITestData } from "../interfaces/testInterfaces.js";
import { tests as Tests } from "@prisma/client";

import testsRepository from "../repositories/testsRepository.js";
import teachersRepository from "../repositories/teachersRepository.js";
import categoriesRepository from "../repositories/categoriesRepository.js";
import disciplinesRepository from "../repositories/disciplinesRepository.js";
import teachersDisciplinesRepository from "../repositories/teachersDisciplinesRepository.js";

import testUtils from "../utils/testUtils.js";

async function insert(data: ITestData) {

    const { name, pdfUrl, category: categoryName, discipline, teacher }: ITestData = data;

    const { id: categoryId }: { id: number } = await categoriesRepository.getIdByName(categoryName);
    const { id: teacherId }: { id: number } = await teachersRepository.getIdByName(teacher);
    const { id: disciplineId }: { id: number } = await disciplinesRepository.getIdByName(discipline);
    const { id: teacherDisciplineId }: { id: number } = await teachersDisciplinesRepository.getIdByTeacherIdAndDisciplineId(teacherId, disciplineId);

    const insertData: Omit<Tests, "id"> = testUtils.generateInsertData(name, pdfUrl, categoryId, teacherDisciplineId);

    await testsRepository.insert(insertData);
}

const testServices = {

    insert
}

export default testServices;