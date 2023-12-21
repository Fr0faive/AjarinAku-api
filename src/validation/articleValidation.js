import Joi from "joi";

const createArticleValidation = Joi.object({
  title: Joi.string().max(255).required(),
  content: Joi.string().max(255).required(),
  description: Joi.string().max(255).required(),
  created_at: Joi.date().optional(),
  modified_at: Joi.date().optional(),
  image: Joi.string().max(255).optional(),
  categoryId: Joi.number().required(),
  userId: Joi.number().required(),
});

const updateArticleValidation = Joi.object({
  article_id: Joi.number().positive().required(),
  title: Joi.string().max(255).optional(),
  content: Joi.string().max(255).optional(),
  description: Joi.string().max(255).optional(),
  created_at: Joi.date().optional(),
  modified_at: Joi.date().optional(),
  image: Joi.string().max(255).optional(),
  categoryId: Joi.number().optional(),
  userId: Joi.number().optional(),
});

const getArticleValidation = Joi.number().required();

const deleteArticleValidation = Joi.number().required();

export {
  createArticleValidation,
  updateArticleValidation,
  getArticleValidation,
  deleteArticleValidation,
};
