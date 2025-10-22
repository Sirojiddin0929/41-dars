import Joi from "joi";

const waterSchema=Joi.object({
    name:Joi.string().min(3).max(20).required(),
    volume_liters:Joi.number().positive().required(),
    price:Joi.number().positive().required()
})

const waterUpdateSchema=Joi.object({
    name:Joi.string().min(3).max(20),
    volume_liters:Joi.number().positive(),
    price:Joi.number().positive(),
})

export {waterSchema,waterUpdateSchema}