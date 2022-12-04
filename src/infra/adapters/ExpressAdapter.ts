import { Request, Response } from 'express';

import { Controller } from './types';

export class ExpressAdapter<T = Record<string, unknown>> {
  constructor(private readonly controller: Controller<T>) {}

  adapt = async (req: Request<unknown, unknown, Partial<T>, Partial<T>>, res: Response) => {
    const input = { ...req.body, ...req.query } as T;

    const { status, message } = await this.controller.execute(input);
    if (!message) return res.sendStatus(status);

    return res.status(status).json({ message });
  };
}
