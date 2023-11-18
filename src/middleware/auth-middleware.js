import { prismaClient } from "../application/database";

export const authMiddleware = async (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) {
    return res.status(401).json({
      errors: "Unauthorized",
    });
  } else {
    const user = await prismaClient.user.findFirst({
      where: {
        token: token,
      },
    });
    if (!user) {
      return res.status(401).json({
        errors: "Unauthorized",
      });
    } else {
      req.user = user;
      next();
    }
  }
};