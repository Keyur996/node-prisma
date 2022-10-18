import { IUser } from "../users/user.model";

export interface ICategory {
    id?: number;
    name: string;
    posts?: IPost[];
}

export interface IPost {
    id?: string | number;
    title: string;
    content: string;
    categories: ICategory[];
    published?: boolean;
    author: IUser;
    authorId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
