import { Router } from "express";
import { userRoutes } from "./user.routes";
import { memberRoutes } from "./member.routes";
import { reportRoutes } from "./report.routes";

export const routes = Router();

routes.get("/", (_, res) => {
  res.json({ message: "Hello world"});
});

routes.use(userRoutes);
routes.use(memberRoutes);
routes.use(reportRoutes);
