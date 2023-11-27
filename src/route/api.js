import express from "express";
import userController from "../controller/userController.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import articleController from "../controller/articleController.js";
import categoryService from "../service/categoryService.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);
userRouter.get("/api/users/current", userController.getUser);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);
// Article
userRouter.post("/api/articles", articleController.create);
// category
userRouter.post("/api/categories", categoryService.create);

export { userRouter };
