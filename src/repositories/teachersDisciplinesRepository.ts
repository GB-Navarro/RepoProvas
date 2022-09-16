import { client } from "../dbStrategy/postgres.js";
 
async function getIdByTeacherIdAndDisciplineId(teacherId: number, disciplineId: number){

    const result = await client.teachersDisciplines.findFirst({
        where:{
            teacherId: teacherId,
            disciplineId: disciplineId
        },
        select:{
            id: true
        }
    })

    return result;
}

const teachersDisciplinesRepository = {

    getIdByTeacherIdAndDisciplineId
}

export default teachersDisciplinesRepository;