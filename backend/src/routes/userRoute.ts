import { Router } from "express";
import {
  userLogout,
  userSignin,
  userSignup,
  verifyUser,
} from "../controllers/userController.js";

import { verifyToken } from "../utils/token-manager.js";

const userRoute = Router();

userRoute.post("/signin", userSignin);
userRoute.post("/signup", userSignup);
userRoute.get("/auth-status", verifyUser);
userRoute.get("/logout", verifyToken, userLogout);

export default userRoute;