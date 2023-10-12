import { Router } from "express";
import { memberController } from "../controllers/memberController";

export const memberRoutes = Router();
const member = new memberController();
memberRoutes.get('/showMembers', member.index);