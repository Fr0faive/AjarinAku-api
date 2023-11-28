import Joi from "joi";

const categoryValidation = Joi.object({
  category_name: Joi.string().max(255).required(),
});

const getCategoryValidation = Joi.string().max(255).required();

export { categoryValidation, getCategoryValidation };
