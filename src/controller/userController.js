import userService from "../service/userService.js";

const register = (req, res, next) => {
  try {
    const result = userService.register(req.body);
    res.status(200).json({
      data: result,
      success: true,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  register,
};
