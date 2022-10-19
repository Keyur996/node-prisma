import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../../utils/error";
import {
    getAllPosts,
    createPost,
    updatePost,
    deletePost,
    postById
} from "./posts.service";
import { postSchema } from "./post.model";

export const validatePost = async (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    try {
        const parsedPost = await postSchema.validate(req.body);
        req.body = parsedPost;
        next();
    } catch (err) {
        console.log("Error inside validate Post", err);
        next(err);
    }
};

export const getPosts = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const posts = await getAllPosts({});

        if (!posts) {
            return next(new ErrorResponse("No posts Found", 404));
        }

        return res.status(200).json({
            success: true,
            message: "Posts fetched Successfully!!",
            posts
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
        const post = await createPost(req.body);

        return res.status(200).json({
            success: true,
            message: "Posts created Successfully!!",
            post
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
        const post = await updatePost(+req.params?.id, req.body);

        if (!post) {
            return next(new ErrorResponse("No posts Found", 404));
        }

        return res.status(200).json({
            success: true,
            message: "Posts updated Successfully!!",
            post
        });
    } catch (err) {
        next(err);
    }
};

export const deleteP = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const post = await deletePost(+req.params?.id);

        if (!post) {
            return next(new ErrorResponse("No posts Found", 404));
        }

        return res.status(200).json({
            success: true,
            message: "Posts deleted Successfully!!",
            post
        });
    } catch (err) {
        next(err);
    }
};

export const getPostById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const post = await postById(+req.params?.id);

        if (!post) {
            return next(new ErrorResponse("No posts Found", 404));
        }

        return res.status(200).json({
            success: true,
            message: "Posts fetched Successfully!!",
            post
        });
    } catch (err) {
        next(err);
    }
};
