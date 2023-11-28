import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/responseError.js";
import {
  categoryValidation,
  getCategoryValidation,
} from "../validation/categoryValidation.js";
import { validation } from "../validation/validation.js";

const create = async (request) => {
  console.log("request :" + request);
  const category = validation(categoryValidation, request);
  const createCategory = prismaClient.category.create({
    data: category,
    select: {
      category_name: true,
    },
  });
  return createCategory;
};

const getCategory = async (categoryName) => {
  categoryName = validation(getCategoryValidation, categoryName);

  const category = await prismaClient.category.findUnique({
    where: {
      category_name: categoryName,
    },
    select: {
      category_name: true,
    },
  });

  if (!category) {
    throw new ResponseError("Category is not found", 404);
  }

  return category;
};

const getAllCategory = async () => {
  const categories = await prismaClient.category.findMany({
    select: {
      category_name: true,
    },
  });
  return categories;
};

const delCategory = async (categoryName) => {
  await prismaClient.category.delete({
    where: {
      category_name: categoryName,
    },
  });
};

const updateCategory = async (request) => {
  const category = validation(categoryValidation, request);
  const updateCategory = prismaClient.category.update({
    where: {
      category_name: category.category_name,
    },
    data: category,
    select: {
      category_name: true,
    },
  });
  return updateCategory;
};

export default {
  create,
  getCategory,
  getAllCategory,
  delCategory,
  updateCategory,
};
