import { IUser } from "../users/user.model";
import * as Yup from "yup";

export interface ICategory {
    id?: number;
    name: string;
    posts?: IPost[];
}

export interface IPost {
    id?: number;
    title: string;
    content: string;
    categories: ICategory[];
    published?: boolean;
    author: IUser;
    authorId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export const postSchema = Yup.object()
    .shape({
        id: Yup.number().optional(),
        title: Yup.string().required(),
        content: Yup.string().required(),
        categories: Yup.array().of(Yup.string()).required(),
        published: Yup.boolean().default(false),
        authorId: Yup.number().required(),
        updatedAt: Yup.date().optional()
    })
    .required();
