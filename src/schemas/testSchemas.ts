import { ITestData } from "../interfaces/testInterfaces.js";

import Joi from "joi";

const insert = Joi.object<ITestData>({
    name: Joi.string().min(4).required(),
    pdfUrl: Joi.string().min(6).uri(),
    category: Joi.string().min(2).required(),
    discipline: Joi.string().min(3).required(),
    teacher: Joi.string().min(3).required(),
})

const testSchemas = {

    insert
}

export default testSchemas;