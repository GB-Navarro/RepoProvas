import { client } from "../dbStrategy/postgres";
 
async function getIdByName(categoryName: string){
    const result = await client.categories.findFirst({
        where:{
            name: categoryName
        },
        select:{
            id: true
        }
    })

    return result;
}

const categoriesRepository = {

    getIdByName
}

export default categoriesRepository;