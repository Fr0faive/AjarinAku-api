import userService from "../service/userService.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getUser = async (req, res, next) => {
  try {
    const username = req.user.username;
    const result = await userService.getUser(username);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const result = await userService.getAllUser();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user_id = req.params.id;
    const result = await userService.getUserById(parseInt(user_id));
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const username = req.user.username;
    const request = req.body;
    request.username = username;
    const result = await userService.update(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res, next) => {
  try {
    await userService.logout(req.user.username);
    res.status(200).json({
      data: "OK",
    });
  } catch (e) {
    next(e);
  }
};

export default {
  register,
  login,
  getUser,
  update,
  logout,
  getUserById,
  getAllUser,
};
