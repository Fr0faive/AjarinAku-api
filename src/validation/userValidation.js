import Joi from "joi";

const registerUserValidation = Joi.object({
  id: Joi.number().required(),
  username: Joi.string().max(255).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export { registerUserValidation };
