import { ISignUpData } from "../interfaces/AuthInterfaces.js";

import Joi from "joi";

const signUp = Joi.object<ISignUpData>({

    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(10).required(),
    confirmedPassword: Joi.string().min(10).required()
})

const authSchemas = {

    signUp
}

export default authSchemas