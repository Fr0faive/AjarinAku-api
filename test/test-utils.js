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
      firstName: "john",
      lastName: "doe",
      password: await bcrypt.hash("test", 10),
      email: "test@test.com",
      token: "test",
      roles: "user",
    },
  });
};

const getTestUser = async () => {
  return prismaClient.user.findUnique({
    where: {
      username: "test",
    },
  });
};

const createTestArticle = async () => {
  await prismaClient.article.create({
    data: {
      title: "test",
      content: "test",
      description: "test",
      created_at: new Date(),
      modified_at: new Date(),
    },
  });
};

const removeTestArticle = async () => {
  await prismaClient.article.deleteMany({
    where: {
      title: "test",
    },
  });
};

const createTestCategory = async () => {
  await prismaClient.category.create({
    data: {
      category_name: "test",
    },
  });
};

const removeTestCategory = async () => {
  await prismaClient.category.deleteMany({
    where: {
      category_name: "test",
    },
  });
};

export {
  removeTestUser,
  createTestUser,
  getTestUser,
  createTestArticle,
  removeTestArticle,
  removeTestCategory,
  createTestCategory,
};
