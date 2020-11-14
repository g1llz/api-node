import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  decoded: {
    [key: string]: any;
  };
}

export default function authGuard(deps) {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    const adminRequired = !!req.originalUrl.match(/\/api\/v1\/admin\//g);

    if (!deps.exclusions.includes(req.originalUrl)) {
      const token = req.headers['x-access-token'] as string;

      if (!token) {
        res.status(403).json({ error: 'Token não fornecido.' });
        return false;
      }

      try {
        req.decoded = jwt.verify(token, process.env.JWT_SECRET) as object;

        // role verification example
        if (adminRequired) {
          if (req.decoded.role !== 'admin') {
            res.status(401).json({ error: 'Não autorizado.' });
            return false;
          }
        }
      } catch (error) {
        res.status(403).json({ error: 'Token inválido.' });
        return false;
      }
    }
    next();
  }
}
