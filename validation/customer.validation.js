import Joi from "joi";

const customersSchema=Joi.object({
    name:Joi.string().min(3).max(20).required(),
    phone:Joi.number().positive().min(8).max(20).required()
})

const customerUpdateSchema=Joi.object({
    name:Joi.string().min(3).max(20),
    phone:Joi.number().positive().min(8).max(20)
})

export {customersSchema,customerUpdateSchema}