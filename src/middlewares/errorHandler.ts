import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../utils/error";

export const errorHandler = (
    err: Error & ErrorResponse,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    // @ts-ignore
    if (err && err.name === "UnauthorizedError") {
        return res.status(401).json({
            status: "error",
            message: "missing authorization credentials"
        });
        // @ts-ignore
    } else if (
        err &&
        err.constructor.name === "PrismaClientKnownRequestError"
    ) {
        return res.status(404).json({
            success: false,
            // @ts-ignore
            message: err?.meta.cause
        });
    } else if (err && err.statusCode) {
        // @ts-ignore
        res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    } else if (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
