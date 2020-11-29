import { Request, Response } from 'express';

export default {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            // auth logic here
            return res.status(200).json({ success: true });
        } catch (error) {
            return res.json(error);
        }
    },
}
