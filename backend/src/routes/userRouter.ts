import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.post("/logout", userController.logout);
router.post("/forgot", userController.forgotPassword);
router.patch("/reset-password/:token", userController.resetPassword);

export default router;
