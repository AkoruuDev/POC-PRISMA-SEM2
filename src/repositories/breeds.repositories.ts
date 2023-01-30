import db from "../database/database.js";
import { List } from "../protocols/breeds.protocols.js";

export async function create(breed: List) {
    const response = await db.breeds.create({
        data: {
            name: breed.name,
            cientific: breed.cientific,
            description: breed.description,
            atk: breed.atk,
            def: breed.def
        }
    })

    return response;
};

export async function findMany() {
    const response = await db.breeds.findMany();

    return response;
};

export async function findOne(id: number) {
    db.breeds.findFirst({
        orderBy: {
            id: 'desc'
        }
    })
    /* const response = await db.breeds.findOne(id);
    return response; */
};

export async function deleteOne(id: number) {
    /* const response = await db.breeds.del(id);

    return response; */
};