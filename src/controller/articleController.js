import articleService from "../service/articleService.js";

const create = async (req, res, next) => {
  try {
    const { title, content, description, category_id, user_id } = req.body;
    const imagePath =
      "https://" + req.get("host") + "/" + req.file.path.replace("\\", "/");
    const articleData = {
      title,
      content,
      description,
      image: imagePath,
      categoryId: category_id,
      userId: user_id,
    };
    const result = await articleService.create(articleData);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const {
      title,
      content,
      description,
      created_at,
      modified_at,
      categoryId,
      userId,
    } = req.body;
    const articleData = {
      article_id: id,
      title,
      content,
      description,
      created_at,
      modified_at,
      categoryId,
      userId,
    };
    const result = await articleService.update(articleData);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const delArticle = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await articleService.delArticle(parseInt(id));
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getArticle = async (req, res, next) => {
  try {
    const article_id = req.params.id;
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

export default { create, getArticle, getAllArticle, update, delArticle };
