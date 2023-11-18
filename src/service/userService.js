import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/responseError.js";
import { registerUserValidation } from "../validation/userValidation.js";
// import validation from "../validation/validation.js";
import bcrypt from "bcrypt";
import { validation } from "../validation/validation.js";

const register = async (request) => {
  const user = validation(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(400, "Username already exists");
  }

  user.password = await bcrypt.hash(user.password, 10);

  const createUser = await prismaClient.user.create({ data: user });
  return createUser;
};

export default { register };
