import express from "express";
import * as userController from "../controllers/userController";
import { userLimiter } from "../middlewares/limiter";

const router = express.Router();

router.post("/login", userLimiter, userController.login);
router.post("/signup", userController.signup);
router.post("/logout", userController.logout);
router.post("/forgot", userLimiter, userController.forgotPassword);
router.patch(
  "/reset-password/:token",
  userLimiter,
  userController.resetPassword
);

export default router;
