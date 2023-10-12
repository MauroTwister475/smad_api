import { Router } from "express";
import { reportController } from "../controllers/reportController";

export const reportRoutes = Router();
const report = new reportController();
reportRoutes.post('/createReport', report.create);