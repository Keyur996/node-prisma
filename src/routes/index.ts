import { Express, Request, Response } from 'express';
import postsRouter from './posts';
import usersRoutes from './users';

export const routes = (app: Express) => {
    app.use('/posts', postsRouter);

    app.use('/users', usersRoutes);

    // Test Route.
    app.get('/hello', (_req: Request, res: Response) => {
        return res.status(200).json({ message: 'Hello world' });
    });
};
