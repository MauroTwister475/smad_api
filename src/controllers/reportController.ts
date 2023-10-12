import { Request, Response } from "express";
import { prisma } from "../database/prisma";

export class reportController {
  async create(req: Request, res: Response) {

    const {
      ponto,
      tema,
      titulo,
      referencia,
      atribuicao,
      documento,
      comentario,
      data,
      decisao,
      Contextualizacao,
      participacao,
    } = req.body;

    const newReport = await prisma.report.create({
      data: {
        ponto,
        tema,
        titulo,
        referencia,
        atribuicao,
        documento,
        comentario,
        data,
        decisao,
        Contextualizacao,
        participacao,
      },
    });

    return res.status(201).json(newReport);
  }
}
