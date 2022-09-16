import Joi from "joi";

const insert = Joi.object({
    name: Joi.string().min(4).required(),
    link: Joi.string().uri(),
    category: Joi.string().min(2).required(),
    discipline: Joi.string().min(3).required(),
    teacher: Joi.string().min(4).required()
})

const testSchemas = {

    insert
}

export default testSchemas;