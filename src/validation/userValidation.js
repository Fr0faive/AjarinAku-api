import Joi from "joi";

const registerUserValidation = Joi.object({
  username: Joi.string().max(255).required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().max(10).required(),
  lastName: Joi.string().max(70).required(),
  password: Joi.string().required(),
  roles: Joi.string().valid("user", "admin").default("user"),
});

const loginUserValidation = Joi.object({
  username: Joi.string().max(255).required(),
  password: Joi.string().required(),
});

const getUserValidation = Joi.string().max(100).required();

const updateUserValidation = Joi.object({
  username: Joi.string().max(255).required(),
  name: Joi.string().max(255).optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().optional(),
  roles: Joi.string().valid("user", "admin").optional(),
});

export {
  registerUserValidation,
  loginUserValidation,
  getUserValidation,
  updateUserValidation,
};
