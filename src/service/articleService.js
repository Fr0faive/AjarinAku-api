import { createArticleValidation } from "../validation/articleValidation.js";
import { validation } from "../validation/validation.js";
import { prismaClient } from "../application/database.js";

const create = async (request) => {
  const article = validation(createArticleValidation, request);

  const createArticle = await prismaClient.article.create({
    data: article,
    select: {
      article_id: true,
      title: true,
      description: true,
      Image: true,
    },
  });
  return createArticle;
};

const getArticle = async (request) => {
  const article = validation(getArticleValidation, request);
  const getArticle = await prismaClient.article.findUnique({
    where: {
      article_id: article.article_id,
    },
    select: {
      article_id: true,
      title: true,
      content: true,
      description: true,
      image: true,
      created_at: true,
      modified_at: true,
      categoryId: true,
      userId: true,
    },
  });
  return getArticle;
};

const getAllArticle = async () => {
  const getAllArticle = await prismaClient.article.findMany({
    select: {
      article_id: true,
      title: true,
      content: true,
      description: true,
      image: true,
      created_at: true,
      modified_at: true,
      categoryId: true,
      userId: true,
    },
  });
  return getAllArticle;
};

export default { create, getArticle, getAllArticle };
