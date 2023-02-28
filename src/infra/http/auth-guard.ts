import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  decoded: {
    [key: string]: any;
  };
}

export default function authGuard() {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers['x-access-token'] as string;

    if (!token) return res.status(403).json({ error: 'token not found' });

    try {
      req.decoded = jwt.verify(token, process.env.JWT_SECRET) as object;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'invalid token' });
    }
  };
}
