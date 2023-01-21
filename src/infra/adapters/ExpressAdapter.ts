import { Request, Response } from 'express';
import { Controller } from './interfaces';

export class ExpressAdapter<T = Record<string, unknown>> {
  constructor(private readonly controller: Controller<T>) {}

  adapt = async (req: Request, res: Response) => {
    const input = { ...req.body, ...req.query, ...req.params } as T;

    const { status, data } = await this.controller.execute(input);
    if (!data) return res.sendStatus(status);

    return res.status(status).json({ data });
  };
}
