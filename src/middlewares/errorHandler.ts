import {
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError
} from "@prisma/client/runtime";
import { NextFunction, Request, Response } from "express";
import { ErrorResponse, ErrorType } from "../utils/error";

export type ApiError =
    | ErrorType &
          (
              | ErrorResponse
              | PrismaClientInitializationError
              | PrismaClientKnownRequestError
              | PrismaClientRustPanicError
              | PrismaClientValidationError
              | PrismaClientUnknownRequestError
          );

export const errorHandler = (
    err: ApiError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.log("Error Inside errorHandler", err);
    if (err && err.name === "UnauthorizedError") {
        return res.status(401).json({
            status: "error",
            message: "missing authorization credentials"
        });
    } else if (err && err instanceof PrismaClientKnownRequestError) {
        return res.status(404).json({
            success: false,
            message: err?.meta?.cause || "Something Went Wrong"
        });
    } else if (err && (err as ErrorResponse).statusCode) {
        res.status((err as ErrorResponse).statusCode).json({
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
