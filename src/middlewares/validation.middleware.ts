import { Response, NextFunction, Request } from 'express';
import { Schema } from 'joi';
export const validationMiddleware =
    (schema: Schema, key: string | 'body' | 'params' | 'query' = 'body') =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req[key]);
        } catch (err: any) {
            throw new Error(err);
        }
    };
