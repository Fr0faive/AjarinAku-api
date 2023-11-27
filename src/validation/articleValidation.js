import Joi from "joi";

const createArticleValidation = Joi.object({
  title: Joi.string().max(255).required(),
  content: Joi.string().required(),
  description: Joi.string().required(),
  category_id: Joi.number().required(),
  create_at: Joi.date(),
  modified_at: Joi.date(),
  user_id: Joi.number().required(),
  User: Joi.object({
    username: Joi.string().max(255).required(),
  }),
  Category: Joi.object({
    name: Joi.string().max(255).required(),
  }),
});

export { createArticleValidation };
