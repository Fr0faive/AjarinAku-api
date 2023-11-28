import express from "express";
import userController from "../controller/userController.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import articleController from "../controller/articleController.js";
import categoryController from "../controller/categoryController.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);
userRouter.get("/api/users/current", userController.getUser);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);
// Article
userRouter.post("/api/articles", articleController.create);
// category
userRouter.post("/api/categories", categoryController.create);
userRouter.get(
  "/api/categories/all/:categoryName",
  categoryController.getCategory
);
userRouter.get("/api/categories/all", categoryController.getAllCategory);

export { userRouter };
