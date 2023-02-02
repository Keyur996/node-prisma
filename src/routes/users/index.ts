import { Router } from 'express';
import { getAll, update, getUser, create, deleteU } from './users.controller';

const usersRoutes = Router();

usersRoutes.route('').get(getAll).post(create);

usersRoutes.route('/:id').get(getUser).put(update).delete(deleteU);

export default usersRoutes;
