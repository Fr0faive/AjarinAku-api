import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/responseError.js";
import {
  loginUserValidation,
  registerUserValidation,
  getUserValidation,
} from "../validation/userValidation.js";
// import validation from "../validation/validation.js";
import bcrypt from "bcrypt";
import { validation } from "../validation/validation.js";
import { v4 as uuid } from "uuid";

const register = async (request) => {
  const user = validation(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  if (countUser === 1) {
    throw new ResponseError("Username already exists", 400);
  }

  user.password = await bcrypt.hash(user.password, 10);

  const createUser = await prismaClient.user.create({
    data: user,
    select: {
      username: true,
      email: true,
      roles: true,
    },
  });
  return createUser;
};

const login = async (request) => {
  const loginRequest = validation(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      username: "test",
    },
    select: {
      username: true,
      password: true,
    },
  });

  if (!user) {
    throw new ResponseError("User or password incorrect!", 401);
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );
  if (!isPasswordValid) {
    throw new ResponseError("User or password incorrect!", 401);
  }

  const token = uuid().toString();
  return prismaClient.user.update({
    data: {
      token: token,
    },
    where: {
      username: user.username,
    },
    select: {
      token: true,
      username: true,
      email: true,
      roles: true,
    },
  });
};

const getUser = async (username) => {
  username = validation(getUserValidation, username);

  const user = await prismaClient.user.findUnique({
    where: {
      username: username,
    },
    select: {
      username: true,
      email: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, "user is not found");
  }

  return user;
};

export default { register, login, getUser };
