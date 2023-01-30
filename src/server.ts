import express from "express";
import dotenv from "dotenv";

const server = express();
server.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;

import breeds from "./routes/breeds.routes.js";

server.use(breeds)

server.listen(port, () => {
    console.log(`Server running on ${port}`)
});