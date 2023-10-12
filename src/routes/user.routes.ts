import { Router } from "express";
import { userController } from "../controllers/userController";

export const userRoutes = Router();
const user = new userController();
userRoutes.get('/showUser', user.index);