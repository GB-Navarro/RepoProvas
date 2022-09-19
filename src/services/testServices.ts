import { ITestData, IUnformatedTestObtainedByTermAndDiscipline, IUnformatedTestObtainedByTeacherName } from "../interfaces/testInterfaces";
import { tests as Tests } from "@prisma/client";

import testsRepository from "../repositories/testRepository";
import teachersRepository from "../repositories/teachersRepository";
import categoriesRepository from "../repositories/categoriesRepository";
import disciplinesRepository from "../repositories/disciplinesRepository";
import teachersDisciplinesRepository from "../repositories/teachersDisciplinesRepository";

import testUtils from "../utils/testUtils";

async function getCategoryIdOrFail(categoryName: string){

    const result = await categoriesRepository.getIdByName(categoryName);

    if(result === null){
        throw { code: "error_thisCategoryDoesNotExist", message: "This category does not exist!" };
    }

    const { id: categoryId }: { id: number } = result;

    return categoryId
}

async function getTeacherIdOrFail(teacherName: string){

    const result = await teachersRepository.getIdByName(teacherName);

    if(result === null){
        throw { code: "error_thisTeacherDoesNotExist", message: "This teacher does not exist!" };
    }

    const { id: teacherId }: { id: number } = result;

    return teacherId
}

async function getDisciplineIdOrFail(discipline: string){

    const result = await disciplinesRepository.getIdByName(discipline);

    if(result === null){
        throw { code: "error_thisDisciplineDoesNotExist", message: "This discipline does not exist!" };
    }

    const { id: disciplineId }: { id: number } =  result;

    return disciplineId
}

async function getTeacherDisciplineIdOrFail(teacherId: number, disciplineId: number){

    const result = await teachersDisciplinesRepository.getIdByTeacherIdAndDisciplineId(teacherId, disciplineId);
    
    if(result === null){
        throw { code: "error_thisTeacherDoesNotTeachThisDiscipline", message: "This teacher does not teach this discipline!" };
    }

    const { id: teacherDisciplineId }: { id: number } = result

    return teacherDisciplineId;
}

async function insert(data: ITestData) {

    const { name, pdfUrl, category: categoryName, discipline, teacher: teacherName }: ITestData = data;

    const categoryId = await getCategoryIdOrFail(categoryName);
    const teacherId = await getTeacherIdOrFail(teacherName);
    const disciplineId = await getDisciplineIdOrFail(discipline);
    const teacherDisciplineId = await getTeacherDisciplineIdOrFail(teacherId, disciplineId);
    
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