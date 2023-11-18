import bcrypt from "bcrypt";
import { prismaClient } from "../src/application/database";
const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      username: "test",
    },
  });
};

const createTestUser = async () => {
  await prismaClient.user.create({
    data: {
      username: "test",
      password: await bcrypt.hash("test", 10),
      email: "test@test.com",
      token: "test",
      roles: "user",
    },
  });
};

export { removeTestUser, createTestUser };
