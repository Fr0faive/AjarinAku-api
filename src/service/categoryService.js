import { prismaClient } from "../application/database.js";
import { categoryValidation } from "../validation/categoryValidation.js";
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

export default { create };
