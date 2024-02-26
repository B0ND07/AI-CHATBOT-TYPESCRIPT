import { Router } from "express";
import {
  getAllUsers,
  userLogout,
  userSignin,
  userSignup,
  verifyUser,
} from "../controllers/userController.js";
import { signupValidator, validate } from "../utils/validator.js";
import { verifyToken } from "../utils/token-manager.js";

const userRoute = Router();

userRoute.get("/", getAllUsers);
userRoute.post("/signin", userSignin);
userRoute.post("/signup", validate(signupValidator), userSignup);
userRoute.get("/auth-status", verifyToken, verifyUser);
userRoute.get("/logout", verifyToken, userLogout);

export default userRoute;
