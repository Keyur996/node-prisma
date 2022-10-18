import prisma from "../../prisma/prisma-connect";

export const getAllUsers = () => {
    return prisma.user.findMany({
        include: {
            posts: true
        }
    });
};

export const getUserById = (id: number) => {
    return prisma.user.findUnique({ where: { id: id } });
};

export const createUser = (user: any) => {
    return prisma.user.create({
        data: user
    });
};

export const updateuser = (id: number | undefined, user: any) => {
    return prisma.user.update({
        where: {
            id: id
        },
        data: user
    });
};

export const deleteUser = (id: number | undefined) => {
    return prisma.user.delete({
        where: {
            id
        }
    });
};
