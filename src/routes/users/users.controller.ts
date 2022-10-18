import { Request, Response, NextFunction } from "express";
import {
    getAllUsers,
    updateuser,
    deleteUser,
    createUser,
    getUserById
} from "./users.service";

export const getAll = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await getAllUsers();

        return res.status(200).json({
            success: true,
            message: "Users Fetched Successfully !!",
            data: users
        });
    } catch (err) {
        next(err);
    }
};

export const update = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await updateuser(+req.params?.id, req.body);

        return res.status(200).json({
            success: true,
            message: "Users Updated Successfully !!",
            data: users
        });
    } catch (err) {
        next(err);
    }
};

export const deleteU = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await deleteUser(+req.params?.id);

        return res.status(200).json({
            success: true,
            message: "Users Deleted Successfully !!",
            data: users
        });
    } catch (err) {
        next(err);
    }
};

export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await getUserById(+req.params?.id);

        return res.status(200).json({
            success: true,
            message: "Users fetched Successfully !!",
            data: users
        });
    } catch (err) {
        next(err);
    }
};

export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await createUser(req.body);

        return res.status(200).json({
            success: true,
            message: "Users Created Successfully !!",
            data: users
        });
    } catch (err) {
        next(err);
    }
};
