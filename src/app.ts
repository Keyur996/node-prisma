import express, { Express } from "express";
import { routes } from "./routes";
import morgan from "morgan";
import hpp from "hpp";
import helmet from "helmet";
// @ts-ignore
import xss from "xss-clean";
import { errorHandler } from "./middlewares/errorHandler";

const app: Express = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(hpp());

app.use(xss());

app.use(helmet());

routes(app);

app.use(errorHandler);

export default app;
