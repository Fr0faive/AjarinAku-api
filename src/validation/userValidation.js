import Joi from "joi";

const registerUserValidation = Joi.object({
  username: Joi.string().max(255).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export { registerUserValidation };
