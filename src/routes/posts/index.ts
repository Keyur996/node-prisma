import { Router } from 'express';
import { validatePost } from './posts.controller';
import {
  getPosts,
  create,
  update,
  deleteP,
  getPostById,
} from './posts.controller';

const postsRouter = Router();

postsRouter.route('').get(getPosts).post(validatePost, create);

postsRouter.route('/:id').get(getPostById).put(update).delete(deleteP);

export default postsRouter;
