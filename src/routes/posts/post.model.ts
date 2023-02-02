import { IUser } from '../users/user.model';
import Joi from 'joi';

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
  is_deleted?: boolean;
  deleted_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export const postSchema: Joi.ObjectSchema<IPost> = Joi.object({
  id: Joi.number().optional(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  categories: Joi.array().items(Joi.string()).required(),
  published: Joi.boolean().default(false),
  authorId: Joi.string().uuid().required(),
  updatedAt: Joi.date().optional(),
  createdAt: Joi.date().optional(),
  is_deleted: Joi.date(),
  deleted_at: Joi.date(),
}).required();
