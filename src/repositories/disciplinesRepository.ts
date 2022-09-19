import { client } from "../dbStrategy/postgres";
 
async function getIdByName(disciplineName: string){
    const result = await client.disciplines.findFirst({
        where:{
            name: disciplineName
        },
        select:{
            id: true
        }
    })

    return result;
}

const disciplinesRepository = {

    getIdByName
}

export default disciplinesRepository;