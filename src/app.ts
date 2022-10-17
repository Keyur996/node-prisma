import express, { Express } from "express";
import { routes } from "./routes";
import morgan from "morgan";
import { errorHandler } from "./middlewares/errorHandler";

const app: Express = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

routes(app);

app.use(errorHandler);

export default app;
