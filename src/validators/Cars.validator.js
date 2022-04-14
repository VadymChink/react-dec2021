import Joi from "joi";

export const carsValidator =Joi.object({
    model:Joi.string().min(1).max(20).required().messages({
        'string.empty':'не може бути пустим',
        'string.min':'не може бути меньше 1'
    }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})