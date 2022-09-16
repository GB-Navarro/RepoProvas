import { client } from "../dbStrategy/postgres.js";
 
async function getIdByName(teacherName: string){
    const result = await client.teachers.findFirst({
        where:{
            name: teacherName
        },
        select:{
            id: true
        }
    })

    return result;
}

const teachersRepository = {

    getIdByName
}

export default teachersRepository;