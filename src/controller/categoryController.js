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

export default { create };
