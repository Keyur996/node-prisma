import prisma from "./../../prisma/prisma-connect";

export const getAllPosts = (query?: any) => {
    try {
        return prisma.post.findMany({
            include: {
                author: true
            }
        });
    } catch (err) {
        console.log("Error inside getAllPosts", err);
        throw err;
    }
};

export const createPost = (post: any) => {
    try {
        return prisma.post.create({
            data: post
        });
    } catch (err) {
        console.log("Error inside createPost", err);
        throw err;
    }
};

export const updatePost = (id: number | undefined, post: any) => {
    try {
        return prisma.post.update({
            where: { id: id },
            data: {
                ...post,
                updatedAt: new Date()
            }
        });
    } catch (err) {
        console.log("Error inside updatePost", err);
        throw err;
    }
};

export const deletePost = (id: number | undefined) => {
    try {
        return prisma.post.delete({
            where: { id: id }
        });
    } catch (err) {
        console.log("Error inside deletePost", err);
        throw err;
    }
};

export const postById = (id: number | undefined) => {
    try {
        return prisma.post.findFirst({
            where: { id: id }
        });
    } catch (err) {
        console.log("Error inside getPostById", err);
        throw err;
    }
};
