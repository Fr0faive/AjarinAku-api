import articleService from "../service/articleService.js";

const create = async (req, res, next) => {
  try {
    const {
      title,
      content,
      description,
      created_at,
      modified_at,
      Image,
      categoryId,
      userId,
    } = req.body;
    const { path } = req.file;
    const articleData = {
      title,
      content,
      description,
      created_at,
      modified_at,
      Image: path,
      categoryId,
      userId,
    };
    const result = await articleService.create(articleData);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getArticle = async (req, res, next) => {
  try {
    const { article_id } = req.params;
    const result = await articleService.getArticle(article_id);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getAllArticle = async (req, res, next) => {
  try {
    const result = await articleService.getAllArticle();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { create, getArticle, getAllArticle };
