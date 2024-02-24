import { Router } from "express";
import {
  getAllUsers,
  userSignin,
  userSignup,
} from "../controllers/userController.js";
import { signupValidator, validate } from "../utils/validator.js";

const userRoute = Router();

userRoute.get("/", getAllUsers);
userRoute.post("/signin", userSignin);
userRoute.post("/signup", validate(signupValidator), userSignup);

export default userRoute;
