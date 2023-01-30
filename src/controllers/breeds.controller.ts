import { Request, Response } from "express";
import db from "../database/database.js";
import { create, findMany } from "../repositories/breeds.repositories.js";
import { breedSchema, breedUpdateSchema } from "../schemas/breedSchemas.js";
import { idSchema } from "../schemas/globalSchemas.js";
import { List } from "../protocols/breeds.protocols.js";

export async function getBreeds (_req: Request, res: Response) {
    try {
        const list = findMany()
        return res.status(200).send(list);
    } catch (err) {
        return res.status(500).send(err.message);
    }
};

export async function postBreed (req: Request, res: Response) {
    const { name, cientific, description, habilities, atk, def } = req.body as List;

    const { error } = breedSchema.validate({ name, cientific, description, habilities, atk, def });
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }

    await create({ name, cientific, description, atk, def });
    const breed: { id: number } = await db.query(`SELECT id FROM breeds DESC;`);
    habilities.forEach (async (e, i) => {
        // await db.query(`INSERT INTO hab_breeds (habilities, breed_id) VALUES ($1, $2);`, [habilities[e], breed.id[0]] );
    });
    return res.status(200).send("breed created successfully")
};

export async function deleteBreed (req: Request, res: Response) {
    const { id } = req.params as {id: string};

    const { error } = idSchema.validate(Number(id));
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }

    try {
        // await db.query(`DELETE breeds WHERE id = $1;`, [id]);
        // await db.query(`DELETE habilities WHERE breed_id = $1;`, [id]);
        return res.status(200).send("breed deleted successfully");
    } catch (err) {
        return res.status(500).send(err.message);
    }
};

export async function updateBreed (req: Request, res: Response) {
    const { id } = req.params as {id: string};
    const { name = "", cientific = "", description = "", habilities = [], atk = 0, def = 0 } = req.body as List;
    const { error } = breedUpdateSchema.validate({ name, cientific, description, habilities, atk, def });
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }
    const update: string[] = [ `${name}`, `${cientific}`, `${description}`, `${atk}`, `${def}` ];
    const element: string[] = [ "name", "cientific", "description", "atk", "def" ]
    try {
        update.forEach(async (e, i) => {
            if(e !== "" && e !== "0") {
            console.log(`UPDATE breeds SET ${element[i]} = ${e} WHERE id = ${id};`)
            /* 
                await db.query(`UPDATE breeds SET $1 = $2 WHERE id = $2;`, [element[i], update[e], id]);
             */
            }
        });
        habilities.forEach(async e => {
            console.log(`INSERT INTO hab_breeds VALUES (${e});`)
            // await db.query(`INSERT INTO hab_breeds VALUES ($1);`, [e]);
        });
        return res.status(200).send("breed updated successfully")
    } catch (err) {
        return res.status(500).send(err.message)
    }
}