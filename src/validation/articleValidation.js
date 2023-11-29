import Joi from "joi";

const createArticleValidation = Joi.object({
  title: Joi.string().max(255).required(),
  content: Joi.string().max(255).required(),
  description: Joi.string().max(255).required(),
  created_at: Joi.date().optional(),
  modified_at: Joi.date().optional(),
  categoryId: Joi.number().required(),
  userId: Joi.number().required(),
});

const updateArticleValidation = Joi.object({
  title: Joi.string().max(255).optional(),
  content: Joi.string().max(255).optional(),
  description: Joi.string().max(255).optional(),
  created_at: Joi.date().optional(),
  modified_at: Joi.date().optional(),
  categoryId: Joi.number().optional(),
  userId: Joi.number().optional(),
});

const getArticleValidation = Joi.string().max(255).required();

const deleteArticleValidation = Joi.string().max(255).required();

export {
  createArticleValidation,
  updateArticleValidation,
  getArticleValidation,
  deleteArticleValidation,
};
