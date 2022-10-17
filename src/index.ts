import app from "./app";
import "dotenv/config";
import "express-async-errors";

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
    console.log(`Server is Running on ${port}`);
});
