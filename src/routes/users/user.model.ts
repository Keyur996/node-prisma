import { IPost } from "../posts/post.model";

export interface IUser {
    id?: number;
    email: string;
    firstname: string;
    lastName: string;
    createdAt?: Date;
    updatedAt?: Date;
    posts: IPost[];
}
