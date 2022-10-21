import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextFunction, Request, Response } from "express";
import { ValidationError } from "joi";
import { IErrorResponse, ErrorType } from "../utils/error";

export type ApiError = IErrorResponse & ValidationError & ErrorType;

export const errorHandler = (
    err: ApiError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.log("Error Inside errorHandler", err);
    if (err && err instanceof PrismaClientKnownRequestError) {
        return res.status(404).json({
            success: false,
            message: err?.meta?.cause || "Something Went Wrong"
        });
    } else if (err.name === "ValidationError") {
        res.status(422).json({
            success: false,
            message: err.message
        });
    } else if (err && err.statusCode) {
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
