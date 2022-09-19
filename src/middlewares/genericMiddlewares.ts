import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

import authUtils from "../utils/authUtils";

function validateSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {

        const validation = schema.validate(req.body);

        if (validation.error) {
            return res.status(422).send({ error: validation.error.message });
        }

        next();
    }
}

function validateToken(req: Request, res: Response, next: NextFunction): void {

    const token: string = req.headers.authorization;

    if (token === undefined) {
        throw { code: "error_notReceivedAToken", message: "Token not found!" };
    }

    const filteredToken = authUtils.filterToken(token);
    const data: any = authUtils.checkTokenValidity(filteredToken);

    res.locals.data = data;

    next();
}

const genericMiddlewares = {

    validateSchema,
    validateToken
}

export default genericMiddlewares;
