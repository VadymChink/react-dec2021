import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().min(1).max(20).required().messages({
        'string.empty': 'не може бути пустим',
        'string.min': 'мінімум 1 символ',
        'string.max': 'максимум 20 символів'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear())
});

export {
    carValidator
}