import { Request, Response } from "express";
import { prisma } from "../database/prisma";

export class userController {
  async index(req: Request, res: Response) {
    const user = await prisma.user.findFirstOrThrow();

    return res.status(200).json(user);
  }
}
