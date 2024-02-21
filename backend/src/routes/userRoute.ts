import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/userController.js";


const userRoute=Router()


userRoute.get("/",getAllUsers)
userRoute.post("/signup",userSignup)

export default userRoute