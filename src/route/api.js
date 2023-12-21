import express from "express";
import userController from "../controller/userController.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import articleController from "../controller/articleController.js";
import categoryController from "../controller/categoryController.js";
import { upload } from "../middleware/multer-middleware.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);
userRouter.get("/api/users/current", userController.getUser);
userRouter.get("/api/users/all", userController.getAllUser);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);

// Article
userRouter.use(upload.single("image"));
userRouter.post("/api/articles", articleController.create);
userRouter.delete("/api/articles/:id", articleController.delArticle);
userRouter.put("/api/articles/:id", articleController.update);

// category
userRouter.post("/api/categories", categoryController.create);
userRouter.get(
  "/api/categories/all/:categoryName",
  categoryController.getCategory
);
userRouter.get("/api/categories/all", categoryController.getAllCategory);
userRouter.delete(
  "/api/categories/:categoryName",
  categoryController.delCategory
);

userRouter.patch(
  "/api/categories/:categoryName",
  categoryController.updateCategory
);

export { userRouter };
