import { Express, Request, Response } from "express";
import postsRouter from "./posts";

export const routes = (app: Express) => {
    app.use("/posts", postsRouter);

    // Test Route.
    app.get("/hello", (_req: Request, res: Response) => {
        return res.status(200).json({ message: "Hello world" });
    });
};
