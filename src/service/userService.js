import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/responseError.js";
import { registerUserValidation } from "../validation/userValidation.js";
import validation from "../validation/validation.js";
import bcrypt from "bcrypt";

const register = async (request) => {
  const user = validation(registerUserValidation, request);
  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });
  if (countUser > 0) {
    throw new ResponseError("Username already exists", 400);
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
    },
  });
};

export default { register };
