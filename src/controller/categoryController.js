import categoryService from "../service/categoryService.js";

const create = async (req, res, next) => {
  try {
    const result = await categoryService.create(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const categoryName = req.params.categoryName;
    const result = await categoryService.getCategory(categoryName);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getAllCategory = async (req, res, next) => {
  try {
    const result = await categoryService.getAllCategory();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const delCategory = async (req, res, next) => {
  try {
    const categoryName = req.params.categoryName;
    await categoryService.delCategory(categoryName);
    res.status(200).json({
      data: "OK",
    });
  } catch (e) {
    next(e);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const result = await categoryService.updateCategory(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  create,
  getCategory,
  getAllCategory,
  delCategory,
  updateCategory,
};
