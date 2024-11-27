import express from "express";
import UserController from "@controllers/userContoller";
import { authenticate } from "@middlewares/authenticate";

const router = express.Router();
const userController = new UserController();

router.get(
  "/fetch-user-data",
  authenticate,
  userController.getUser.bind(userController)
);
router.post("/register-user", userController.register.bind(userController));
router.put(
  "/update-user-data",
  authenticate,
  userController.updateUser.bind(userController)
);

export default router;
