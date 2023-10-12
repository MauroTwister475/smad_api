import { Request, Response } from "express";
import { prisma } from "../database/prisma";

export class memberController {
  async index(req: Request, res: Response) {
    const members = await prisma.membro.findMany();

    return res.status(200).json(members);
  }
}
