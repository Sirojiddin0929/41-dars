import Joi from "joi";

const regionsSchema=Joi.object({
    name:Joi.string().min(3).max(20).required(),
    
})

const regionUpdateSchema=Joi.object({
    name:Joi.string().min(3).max(20),
    
})

export {regionsSchema,regionUpdateSchema}