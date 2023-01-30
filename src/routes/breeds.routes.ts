import { Request, Response, Router } from "express";
import { deleteBreed, getBreeds, postBreed, updateBreed } from "../controllers/breeds.controller.js";

const route = Router();

route
    .get('/breed/confer', (_req: Request, res: Response) => {
        res.send('Breeds route OK');
    })
    .get('/breeds', getBreeds)
    .post('/breed', postBreed)
    .delete('/breed/:id', deleteBreed)
    .put('/breed/:id', updateBreed);

export default route;