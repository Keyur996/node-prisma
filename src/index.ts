import app from "./app";
import "dotenv/config";

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
    console.log(`Server is Running on ${port}`);
});
