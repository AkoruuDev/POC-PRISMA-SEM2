import Joi from "joi";

const name = Joi.string().required()
const cientific = Joi.string().required()
const description = Joi.string().required()
const habilities = Joi.array().required();
const atk = Joi.number().min(100).required();
const def = Joi.number().min(100).required();

export const breedSchema = Joi.object({
    name: Joi.string().required(),
    cientific: Joi.string().required(),
    description: Joi.string().required(),
    habilities: Joi.array().required(),
    atk: Joi.number().min(100).required(),
    def: Joi.number().min(100).required()
});

export const breedUpdateSchema = Joi.object({
    name: Joi.string(),
    cientific: Joi.string(),
    description: Joi.string(),
    habilities: Joi.array(),
    atk: Joi.number(),
    def: Joi.number()
})