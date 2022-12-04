import { Request, Response } from 'express';

export default {
    async index(req: Request, res: Response) {
        try {
            // mongoose logic here
            return res.status(200).json({ success: true });
        } catch (error) {
            return res.json(error);
        }
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        try {
            // mongoose logic here
            return res.status(200).json({ success: true });
        } catch (error) {
            return res.json(error);
        }
    },

    async store(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            // mongoose logic here
            return res.status(201).json({ success: true });
        } catch (error) {
            return res.json(error);
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { password } = req.body;

        try {
            // mongoose logic here
            return res.status(200).json({ success: true });
        } catch (error) {
            return res.json(error);
        }
    },
}
