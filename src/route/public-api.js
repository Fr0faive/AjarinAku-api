import express from "express";
import userController from "../controller/userController.js";
import articleController from "../controller/articleController.js";

const publicRouter = new express.Router();
publicRouter.post("/api/users", userController.register);
publicRouter.post("/api/users/login", userController.login);

publicRouter.use("/images", express.static("images"));
publicRouter.get("/api/articles", articleController.getAllArticle);
publicRouter.get("/api/articles/:id", articleController.getArticle);

export { publicRouter };
